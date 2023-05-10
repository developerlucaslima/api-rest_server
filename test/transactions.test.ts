import { test, beforeAll, afterAll } from 'vitest'
import supertest from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

test('user can create a new transation', async () => {
  await supertest(app.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 100,
      type: 'credit',
    })
    .expect(201)
})
