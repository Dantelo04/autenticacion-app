"use client"
import { Button } from "@/components/ui/button"
import { unVerifyUser, verifyUser } from "./actions"
import { isVerified } from "@/data"

interface UnVerifyButtonProps {
    email:string
}

export default function UnVerifyButton({
    email
}: UnVerifyButtonProps) {
    function clickUnVerify() {
        unVerifyUser(email)
    }

    return(
        <Button className="bg-red-700/15 border border-red-500 hover:bg-red-500 text-red-500 hover:text-red-900" onClick={clickUnVerify}>Desverificarse</Button>
    )
}