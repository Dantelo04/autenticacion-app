import { getServerSession } from "next-auth"
import Navbar from "./componentes/Navbar"
import { options } from "./api/auth/[...nextauth]/options"
import Link from "next/link"

export default async function Home() {
    const session = await getServerSession(options)
    return(
        <div className="flex w-screen h-screen items-center justify-center bg-neutral-900">
            <Navbar></Navbar>
            <div className="flex mt-16 h-[80%] w-10/12 mx-auto border bg-black rounded-xl border-neutral-500">
                <div className="flex flex-col w-full h-full border-neutral-500 justify-center items-center">
                    {session ? (
                        <div className="flex w-full justify-center items-center h-1/6">Buenos dias, {session?.user?.name}! Un correo de verificación será mandado a <p className="font-bold underline px-1"> {session?.user?.email}</p></div>
                    ) : (
                        <div className="w-full text-center h-1/6">Buenos dias!<Link href="/api/auth/signin" className="underline font-bold">Inicie sesión</Link></div>
                    )}
                    <div className="w-11/12 h-4/6 border border-neutral-500 p-7 rounded-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis neque quos impedit eaque. Ad praesentium nobis quo enim tempore cupiditate recusandae consequatur exercitationem neque? Similique ea dolorum excepturi blanditiis!
                    </div>
                </div>
            </div>
        </div> 
    )
}