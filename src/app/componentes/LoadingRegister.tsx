import { CircleAlertIcon } from "lucide-react"
import { CheckCircleIcon } from "lucide-react"

interface LoadingRegisterProps {
    message?:string
}

export default function LoadingRegister({
    message
}: LoadingRegisterProps) {
    if(message === "...") {
        return(
            <div className="flex justify-center text-neutral-300 bg-neutral-500/15 border border-neutral-300 rounded-md p-2 font-semibold">
                Cargando...
            </div>
        )
    } else if (message !== "") {
        return(
            <div className="flex space-x-4 items-center justify-center text-red-500 bg-red-500/15 border border-red-500 rounded-md p-2 font-semibold text-sm">
                <CircleAlertIcon/><p>{message}</p>
            </div>
        )
    }
}