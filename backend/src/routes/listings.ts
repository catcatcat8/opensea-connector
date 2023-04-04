import { Resource } from 'express-automatic-routes'
import axios from 'axios'

type ChainType = "arbitrum" | "avalanche" | "ethereum" | "matic" | "optimism"
const chain: ChainType = "matic"

const URL = `'https://opensea15.p.rapidapi.com/v2/orders/${chain}/seaport/listings'`
const X_RapidAPI_Key = "'5f12d8eb3bmsh214ef05fe9ec8e7p13f5a3jsneffa551725d8'"
const X_RapidAPI_Host = "'opensea15.p.rapidapi.com'"

export default (): Resource => ({
  async get(_, res) {
    
    const options = {
      method: 'GET',
      url: 'https://opensea15.p.rapidapi.com/v2/orders/matic/seaport/listings',
      params: {
        maker: '0x666e416d73609f61C60d8A844066A0d956805118',
        order_by: 'created_date',
        order_direction: 'desc',
      },
      headers: {
        'X-RapidAPI-Key': '5f12d8eb3bmsh214ef05fe9ec8e7p13f5a3jsneffa551725d8',
        'X-RapidAPI-Host': 'opensea15.p.rapidapi.com',
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
