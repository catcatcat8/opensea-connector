import { Resource } from 'express-automatic-routes'
import axios from 'axios'

import config from '@/config'
import { ethers } from 'ethers'
import { Seaport__factory } from '@/contracts/typechain/factories/contracts'
import { getChainProvider } from '@/services/blockchain'

export default (): Resource => ({
  async post(req, res) {
    const offer = JSON.stringify(req.body.offer)
    const fulfiller = JSON.stringify(req.body.fulfiller)
    const consideration = JSON.stringify(req.body.consideration)
    const privateKey = JSON.stringify(req.body.privateKey)

    if (!offer) return res.status(400).send('Offer not specified')
    if (!fulfiller) return res.status(400).send('Fulfiller not specified')
    if (!privateKey) return res.status(400).send('Private key not specified')

    const URL = config.openseaApiBaseUrl + `offers/fulfillment_data`
    const options = {
      method: 'POST',
      url: URL,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
      },
      data: consideration
        ? `{"offer":${offer},"fulfiller":${fulfiller},"consideration":${consideration}}`
        : `{"offer":${offer},"fulfiller":${fulfiller}}`,
    }

    const providerMatic = new ethers.providers.JsonRpcProvider(config.maticRpc)
    const signerMatic = new ethers.Wallet('0x' + privateKey.slice(1, -1), providerMatic)

    await axios
      .request(options)
      .then((response) => {
        const txData = response.data.fulfillment_data.transaction

        const provider = getChainProvider(txData.chain)
        const signer = new ethers.Wallet('0x' + privateKey.slice(1, -1), provider)
        const seaport = Seaport__factory.connect(txData.to, signer)

        switch (txData.function) {
          case 'fulfillBasicOrder_efficient_6GL6yc((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))':
            seaport
              .fulfillBasicOrder_efficient_6GL6yc(txData.input_data.parameters, {
                value: txData.value.toString(),
                maxPriorityFeePerGas: '50000000000',
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
                maxPriorityFeePerGas: '50000000000',
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
                maxPriorityFeePerGas: '50000000000',
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
        res.status(500).send(error.response.data)
      })
  },
})
