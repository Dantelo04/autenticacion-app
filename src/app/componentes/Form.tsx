"use client"

import { Button } from "@/components/ui/button"
import { FormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { signIn } from "next-auth/react"
import { loginSchema, registerSchema } from "../schemas/form.model"
import { register } from "./actions"
import { startTransition, Suspense, useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { resolve } from "path"
import LoadingRegister from "./LoadingRegister"

export function FormLogin() {
    const [checked, setChecked] = useState(true)
    const [type, setType] = useState("password")
    const [message, setMessage] = useState("")

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
        email: "",
        }
    })

    const handleSubmit = async (values: z.infer<typeof loginSchema>) => {
        setMessage("...")
        const result = await signIn("credentials", {
                email: values.email,
                password: values.password,
                redirect: false,
                callbackUrl: "/",
        })

        if(result?.status !== 200) setMessage("Correo o contraseña incorrectos")
    }

    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col space-y-8 w-full">
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-white">Correo electrónico</FormLabel>
            <FormControl>
                <Input placeholder="Ingrese su correo"
                type="email" 
                {...field} 
                className="text-black focus:ring-0"/>
            </FormControl>
            <FormMessage/>
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-white">Contraseña</FormLabel>
            <FormControl>
                <Input placeholder="Ingrese su contraseña"
                type={type} 
                {...field} 
                className="text-black border-0"/>
            </FormControl>
            <div className="flex items-center space-x-2">
                <Checkbox
                    checked={!checked}
                    className="border-neutral-500 bg-neutral-800"
                    onCheckedChange={() => {
                        setChecked(!checked)
                        checked ? setType("text") : setType("password")
                    }}
                />
                <span>Mostrar contraseña</span>
            </div>
            <FormMessage/>
            </FormItem>
        )}
        />
        <LoadingRegister message={message}></LoadingRegister>
        <Button type="submit" className="bg-neutral-900 border border-neutral-600 hover:bg-neutral-500 xl:justify-start justify-center w-full mx-auto text-center">Continuar</Button>
    </form>
    </Form>
    )
}

export function FormRegister() {
    const [checked, setChecked] = useState(true)
    const [type, setType] = useState("password")
    const [message, setMessage] = useState("")

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
        email: "",
        }
    })

    const handleSubmit = async (values: z.infer<typeof registerSchema>) => {
        setMessage("Cargando...")
        startTransition(() => {
            register(values)
                .then(data => setMessage(data!.message))
        })
    }

    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col space-y-8 w-full">
        <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-white">Nombre</FormLabel>
            <FormControl>
                <Input placeholder="Ingrese su nombre"
                type="text" 
                {...field} 
                className="text-black focus:ring-0"/>
            </FormControl>
            <FormMessage/>
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-white">Correo electrónico</FormLabel>
            <FormControl>
                <Input placeholder="Ingrese su correo"
                type="email" 
                {...field} 
                className="text-black focus:ring-0"/>
            </FormControl>
            <FormMessage/>
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
            <FormItem>
            <FormLabel className="text-white">Contraseña</FormLabel>
            <FormControl>
                <Input placeholder="Ingrese su contraseña"
                type={type} 
                {...field} 
                className="text-black border-0"/>
            </FormControl>
            <div className="flex items-center space-x-2">
                <Checkbox
                    checked={!checked}
                    className="border-neutral-500 bg-neutral-800"
                    onCheckedChange={() => {
                        setChecked(!checked)
                        checked ? setType("text") : setType("password")
                    }}
                />
                <span>Mostrar contraseña</span>
            </div>
            <FormMessage/>
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="passwordConfirm"
        
        render={({ field }) => (
            <FormItem className="pb-5">
            <FormLabel className="text-white">Confirmar contraseña</FormLabel>
            <FormControl>
                <Input placeholder="Confirme su contraseña"
                type={type} 
                {...field} 
                className="text-black"/>
            </FormControl>
            <div className="flex items-center space-x-2">
                <Checkbox
                    checked={!checked}
                    className="border-neutral-500 bg-neutral-800"
                    onCheckedChange={() => {
                        setChecked(!checked)
                        checked ? setType("text") : setType("password")
                    }}
                />
                <span>Mostrar contraseña</span>
            </div>
            <FormMessage/>
            </FormItem>
        )}
        />
        <LoadingRegister message={message}></LoadingRegister>
        <Button type="submit" className="bg-neutral-900 border border-neutral-600 hover:bg-neutral-500 xl:justify-start justify-center w-full mx-auto text-center">Continuar</Button>
    </form>
    </Form>
    )
}
