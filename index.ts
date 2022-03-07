import { PrismaClient } from '@prisma/client'
import express from 'express'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 3001


app.get(`/users`, async (req, resp) => {
    const users = await prisma.user.findMany()
    resp.send(users)
})

app.get(`/users/:id`, async (req, resp) => {
    let id = Number(req.params.id)
    const usersHobbies = await prisma.user.findFirst({ where: { id: id }, include: { hobbies: true } })
    resp.send(usersHobbies)
})

app.post(`/users`, async (req, resp) => {
    const { fullName, email, photoURL } = req.body
    const newUser = await prisma.user.create({
        data: {
            fullName,
            email,
            photoURL
        }
    })
    resp.send(newUser)
})

app.delete(`/users/:id`, async (req, resp) => {
    let id = Number(req.params.id)
    const deleteUser = await prisma.user.delete({ where: { id: id } })
    resp.send(deleteUser)
})

app.get(`/hobbies`, async (req, resp) => {
    const hobby = await prisma.hobby.findMany()
    resp.send(hobby)
})

app.get(`/hobbies/:id`, async (req, resp) => {
    const id = Number(req.params.id)
    const hobby = await prisma.hobby.findFirst({ where: { id: id }, include: { users: true } })
    resp.send(hobby)
})

app.post(`/hobbies`, async (req, resp) => {
    const { name, imageURL, active } = req.body
    const newHobby = await prisma.hobby.create({
        data: {
            name,
            imageURL,
            active
        }
    })
    resp.send(newHobby)
})

app.delete(`/hobbies/:id`, async (req, resp) => {
    let id = Number(req.params.id)
    const deleteHobby = await prisma.hobby.delete({ where: { id: id } })
    resp.send(deleteHobby)
})



app.listen(PORT, () => {
    console.log(`Server up and running: http://localhost:${PORT}`)
})