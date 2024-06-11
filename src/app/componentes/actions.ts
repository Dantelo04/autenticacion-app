'use server'

import bcrypt from "bcrypt"
import { signIn, signOut, useSession } from 'next-auth/react'
import User from '../models/User.model'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'
import { z } from "zod"
import { loginSchema, registerSchema } from '../schemas/form.model'
import { getUserByEmail } from "@/data"
import { db } from "@/lib/db"
import { hash, setEngine } from "crypto"

export async function navigate(data: string) {
    redirect(data)
}

export async function bringSession() {
    const session = await getServerSession(options)
    if(session) {
        return session
    } else {
        return null
    }
}

export async function register(values: z.infer<typeof registerSchema>) {
    await new Promise(resolve => setTimeout(resolve, 3000))

    const hashedPassword = await bcrypt.hash(values.password, 10)
    const existingUser = await getUserByEmail(values.email)
    if(existingUser) {
        console.log(existingUser)
        return {message: "Una cuenta ya ha utilizado ese correo"}
    }

    await db.user.create({
        data: {
            name: values.name,
            email: values.email,
            password: hashedPassword
        }
    })

    return navigate("/sign-in")
}

export async function editUserName(email:string, name:string) {
    await db.user.update({
        where: {
            email
        },
        data: {
            name 
        }
    })

    return navigate("/profile")
}

export const verifyUser = async (email: string) => {
    await db.user.update({
        where: {
            email
        },
        data: {
            Verified: true 
        }
    })
    return navigate("/profile")
}

export const unVerifyUser = async (email: string) => {
    await db.user.update({
        where: {
            email
        },
        data: {
            Verified: false 
        }
    })
    return navigate("/profile")
}