import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/middleware/notFoundRoute'
import { routes } from './app/routes'
const app: Application = express()

const corsOptions = {
  origin: 'https://fitness-hub-ruby.vercel.app',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

// middleware
app.use(cors(corsOptions))
app.use(express.json())

// application routes
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('Server is running')
})

// customize error
app.use(globalErrorHandler)
app.use(notFound)

export default app
