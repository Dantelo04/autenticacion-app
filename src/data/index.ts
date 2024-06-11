import { db } from "@/lib/db"

export const getUserByEmail = async (email:string | undefined) => {
    const existingUser = await db.user.findFirst({
        where: {
            email
        }
    })

    return existingUser
}

export const isVerified = async (email:string | undefined) => {
    const existingUser = await db.user.findUnique({
        where: {
            email
        }
    })

    return existingUser?.Verified
}