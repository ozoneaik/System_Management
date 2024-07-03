import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(request) {
    try {
        const { email, password, name } = await request.json()
        const hashedPassword = bcrypt.hashSync(password, 10)

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        })
        return Response.json({ message: 'ลงทะเบียนสำเร็จ', user })
    } catch (error) {
        return Response.json({ message: 'ลงทะเบียนไม่สำเร็จ',error : error },{status : 500})
    }
}