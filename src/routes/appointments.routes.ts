import { Router } from 'express'
import { uuid } from 'uuidv4'

const appointmentsRouter = Router()

const appointments = []

appointmentsRouter.post('/', (request, reponse) => {
  const { provider, date } = request.body

  const appointment = {
    id: uuid(),
    provider,
    date,
  }

  appointments.push(appointment)

  return reponse.json(appointment)
})

export default appointmentsRouter
