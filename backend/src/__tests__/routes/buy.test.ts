import 'mocha'
import { expect } from 'chai'

import app from '@/app'
import request from 'supertest'

describe('buy route', () => {
  it.skip('should buy', async () => {
    const response = await request(app).get('/buy')
    const json = JSON.parse(response.text)
    console.log('json', json)
    expect(json.buys).to.not.eq(undefined)
  })
  it('should sell', async () => {
    const response = await request(app).get('/sell')
    const json = JSON.parse(response.text)
    console.log('json', json)
    expect(json.success).to.eq(true)
  })
  it.skip('should get collection', async () => {
    const response = await request(app).get('/get-collection')
    expect(response.text).eq('Server is Healthy')
  })
})
