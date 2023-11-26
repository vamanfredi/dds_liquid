import 'reflect-metadata'
import { AppDataSource } from './db'
import app from './app'

const PORT = process.env.PORT ?? 3000

async function main (): Promise<void> {
  try {
    await AppDataSource.initialize()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

void main()
