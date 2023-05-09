import { knex } from '../database'

export async function transactionsRoutes(app) {
  app.get('/hello', async () => {
    const tables = await knex('sqlite_schema').select('*')

    return tables
  })
}
