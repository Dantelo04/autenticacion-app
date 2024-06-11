"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { PenIcon } from "lucide-react"
import { useState } from "react"
import { editUserName } from "./actions"
import { useSession } from "next-auth/react"

interface EditProfileProps {
    name: string
    email: string
}

export default function EditProfile({
    name,
    email
}: EditProfileProps){
    const [text, setText] = useState(name)

    function clickHandler() {
        editUserName(email, text)
    }
    
    function changeHandler(e:any) {
        setText(e.target.value)
    }
    function closeHandler() {
        setText(name)
    }

    return(
        <Dialog>
        <DialogTrigger className="border rounded-md px-2"><PenIcon className="w-4 h-4" onClick={closeHandler}></PenIcon></DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle className="">Editar nombre</DialogTitle>
            <DialogDescription className="flex flex-col space-y-3 pt-4">
                    <Input type="text" className="text-black" name="name" onChange={changeHandler} value={text}/>
                    <DialogClose asChild>
                        <Button className="bg-black border border-neutral-500 hover:bg-neutral-700" onClick={clickHandler}>Guardar cambios</Button>
                    </DialogClose>
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}