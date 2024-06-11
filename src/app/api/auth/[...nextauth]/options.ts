import { getUserByEmail } from "@/data";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { loginSchema } from "@/app/schemas/form.model";

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Ingrese su email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Ingrese su contraseña"
                }
            },
            async authorize(credentials) {
                const validate = loginSchema.safeParse(credentials)

                if(validate.success) {
                    const user = await getUserByEmail(credentials?.email)
                    if(!user || !user.password) return null
    
                    const passwordMatch = await bcrypt.compare(
                        credentials?.password!,
                        user.password
                    )

                    if(passwordMatch){
                        return user  
                    }
                }

                return null
            }
        }),
    ],
    pages: {
        signIn: "/sign-in",
        signOut:"/sign-out"
    },
}