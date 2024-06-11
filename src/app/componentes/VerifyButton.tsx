"use client"
import { Button } from "@/components/ui/button"
import { unVerifyUser, verifyUser } from "./actions"
import { isVerified } from "@/data"

interface VerifyButtonProps {
    email:string
}

export default function VerifyButton({
    email
}: VerifyButtonProps) {
    function clickVerify() {
        verifyUser(email)
    }

    return(
        <Button className="bg-emerald-700/15 border border-emerald-500 hover:bg-emerald-500 text-emerald-500 hover:text-emerald-900" onClick={clickVerify}>Verificarse</Button>
    )
}