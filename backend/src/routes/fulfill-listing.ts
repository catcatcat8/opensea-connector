import { Resource } from 'express-automatic-routes'
import { Request, response } from 'express'
import axios from 'axios'

import config from '@/config'
import { Seaport__factory } from '@/contracts/typechain'
import { ethers } from 'ethers'

export default (): Resource => ({
  async post(req, res) {
    const listing = JSON.stringify(req.body.listing)
    const fulfiller = JSON.stringify(req.body.fulfiller)
    const privateKey = JSON.stringify(req.body.privateKey)

    if (!listing) return res.status(400).send('Listing not specified')
    if (!fulfiller) return res.status(400).send('Fulfiller not specified')

    const URL = config.openseaApiBaseUrl + `listings/fulfillment_data`
    const options = {
      method: 'POST',
      url: URL,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
      },
      data: `{"listing":${listing},"fulfiller":${fulfiller}}`,
    }

    const providerMatic = new ethers.providers.JsonRpcProvider(config.maticRpc)
    const signerMatic = new ethers.Wallet(privateKey, providerMatic)
    // const seaport = Seaport__factory.connect(config.seaportV4, signerMatic)
    // await signerMatic.sendTransaction(response.data.fulfillment_data.transaction)

    await axios
      .request(options)
      .then((response) => {
        signerMatic
          .sendTransaction(response.data.fulfillment_data.transaction)
          .then((response) => {
            res.status(200).send(response.hash)
          })
          .catch((error) => {
            res.status(500).send(error)
          })
        res.status(200).send(response.data)
      })
      .catch((error) => {
        res.status(500).send({ error: (error as Error).message })
      })
  },
})
