import { Resource } from 'express-automatic-routes'
import { Request } from 'express'
import axios from 'axios'

import config from '@/config'

export default (): Resource => ({
  async get(
    req: Request<
      {},
      {},
      {},
      {
        chain?: string
        asset_contract_address?: string
        limit?: string
        token_ids?: string
        maker?: string
        taker?: string
        order_by?: string
        order_direction?: string
        listed_after?: string
        listed_before?: string
      }
    >,
    res
  ) {
    const {
      chain,
      asset_contract_address,
      limit,
      token_ids,
      maker,
      taker,
      order_by,
      order_direction,
      listed_after,
      listed_before,
    } = req.query
    if (!chain) return res.status(400).send('Chain not specified')

    const URL = config.openseaApiBaseUrl + `orders/${chain}/seaport/offers`
    const options = {
      method: 'GET',
      url: URL,
      params: {
        asset_contract_address: asset_contract_address,
        limit: limit,
        token_ids: token_ids,
        maker: maker,
        taker: taker,
        order_by: order_by,
        order_direction: order_direction,
        listed_after: listed_after,
        listed_before: listed_before,
      },
      headers: {
        'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.X_RapidAPI_Host,
      },
    }

    await axios
      .request(options)
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((error) => {
        res.status(500).send(error.response.data)
      })
  },
})
