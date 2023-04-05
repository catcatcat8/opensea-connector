import { Resource } from 'express-automatic-routes'
import { Request } from 'express'
import axios from 'axios'

import config from '@/config'

export default (): Resource => ({
  async post(req: Request, res) {
    const { chain, order_parameters, signature } = req.body
    if (!chain) return res.status(400).send('Chain not specified')
    if (!order_parameters) return res.status(400).send('Order_parameters not specified')
    if (!signature) return res.status(400).send('Signature not specified')

    const URL = config.openseaApiBaseUrl + `orders/${chain}/seaport/listings`
    const options = {
      method: 'POST',
      url: URL,
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
      },
      data: `{"order_parameters":${order_parameters},"signature":${signature}}`,
    }
    await axios
      .request(options)
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((error) => {
        res.status(500).send({ error: (error as Error).message })
      })
  },
})
