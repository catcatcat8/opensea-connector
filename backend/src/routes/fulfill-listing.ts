import { Resource } from 'express-automatic-routes'
import { Request, response } from 'express'
import axios from 'axios'

import config from '@/config'
import { ethers } from 'ethers'
import { Seaport__factory } from '@/contracts/typechain/factories/contracts'

export default (): Resource => ({
  async post(req, res) {
    const listing = JSON.stringify(req.body.listing)
    const fulfiller = JSON.stringify(req.body.fulfiller)
    const privateKey = JSON.stringify(req.body.privateKey)

    if (!listing) return res.status(400).send('Listing not specified')
    if (!fulfiller) return res.status(400).send('Fulfiller not specified')
    if (!privateKey) return res.status(400).send('Private key not specified')

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
    const signerMatic = new ethers.Wallet('0x' + privateKey.slice(1, -1), providerMatic)
    // await signerMatic.sendTransaction(response.data.fulfillment_data.transaction)

    await axios
      .request(options)
      .then((response) => {
        const txData = response.data.fulfillment_data.transaction
        const seaport = Seaport__factory.connect(txData.to, signerMatic)
        switch (txData.function) {
          case 'fulfillBasicOrder_efficient_6GL6yc((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))':
            seaport
              .fulfillBasicOrder_efficient_6GL6yc(txData.input_data.parameters, {
                value: txData.value.toString(),
                maxPriorityFeePerGas: "50000000000",
              })
              .then((response) => {
                res.status(200).send(response.hash)
              })
              .catch((error) => {
                res.status(500).send(error)
              })
            break
          case 'fulfillBasicOrder((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))':
            seaport
              .fulfillBasicOrder(txData.input_data.parameters, {
                value: txData.value.toString(),
                maxPriorityFeePerGas: "50000000000",
              })
              .then((response) => {
                res.status(200).send(response.hash)
              })
              .catch((error) => {
                res.status(500).send(error)
              })
            break
          default:
            seaport
              .fulfillBasicOrder_efficient_6GL6yc(txData.input_data.parameters, {
                value: txData.value,
                maxPriorityFeePerGas: "50000000000",
              })
              .then((response) => {
                res.status(200).send(response.hash)
              })
              .catch((error) => {
                res.status(500).send(error)
              })
            break
        }
      })
      .catch((error) => {
        res.status(500).send({ error: (error as Error).message })
      })
  },
})
