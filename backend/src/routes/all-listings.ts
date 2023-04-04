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
        slug?: string
        limit?: number
        next?: string
      }
    >,
    res
  ) {
    const { slug, limit, next } = req.query
    if (!slug) return res.status(400).send('Slug not specified')

    const URL = config.openseaApiBaseUrl + `listings/collection/${slug}/all`
    const options = {
      method: 'GET',
      url: URL,
      params: {
        limit: limit ?? 20,
        next: next,
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
        res.status(500).send({ error: (error as Error).message })
      })
  },
})
