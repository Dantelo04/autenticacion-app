import {z} from "zod"

export const registerSchema = z.object({
    name: z.string().min(1, {
        message: "El nombre es requerido"
    }),
    email: z.string().email({
        message: "Correo invalido"
    }),
    password: z.string({
        message: "Requerido"
    }).min(3, {
        message: "Debe contener al menos 3 caracteres"
    }),
    passwordConfirm: z.string(),
}).refine((data) => {
    return data.password === data.passwordConfirm
}, {
    message: "Las contraseñas no son iguales",
    path: ["passwordConfirm"]
})

export const loginSchema = z.object({
    email: z.string().email({
        message: "Correo invalido"
    }),
    password: z.string({
        message: "Requerido"
    }).min(1, {
        message: "La password es requerida"
    }),
})