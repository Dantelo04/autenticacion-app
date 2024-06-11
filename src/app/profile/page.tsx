import { getServerSession } from "next-auth";
import Navbar from "../componentes/Navbar";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import { editUserName } from "../componentes/actions";
import EditProfile from "../componentes/EditProfile";
import { useSession } from "next-auth/react";
import { getUserByEmail, isVerified } from "@/data";
import VerifyButton from "../componentes/VerifyButton";
import UnVerifyButton from "../componentes/UnVerifyButton";

export default async function Profile() {
    const session = await getServerSession(options)
    const user = await getUserByEmail(session?.user?.email!)
    const isUserVerified = await isVerified(session?.user?.email!)
    console.log(user!.name)

    return(
        <div className="flex w-screen h-screen items-center justify-center bg-neutral-900">
            <Navbar></Navbar>
            <div className="flex flex-col xl:mt-16 xl:h-[80%] h-3/6 w-10/12 mx-auto border bg-black rounded-xl border-neutral-500">
                <div className="flex xl:flex-row w-full h-3/6 border-b border-neutral-500 items-center">
                    <div className="flex h-full items-center pl-7">
                        <div className="flex h-[270px] w-[270px] mx-auto border items-center rounded-full justify-center">
                            <p>Foto de perfil</p>
                        </div>
                    </div>
                    <div className="flex flex-col grow pl-7 h-5/6">
                        <div className="flex flec-row space-x-4">
                            <div className="text-2xl font-semibold">{user!.name}</div>
                            <EditProfile name={user!.name!} email={session?.user?.email!}></EditProfile>
                        </div>
                        <div>{session?.user?.email}</div>
                        <div className="grow"></div>
                        <Link href="/api/auth/signout" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-2/12 ">Cerrar sesión</Link>
                    </div> 
                </div>
                <div className="flex flex-col p-7 space-y-4">
                    <h1 className="text-xl font-semibold">Verificate</h1>
                    <div className="flex space-x-4">
                    {isUserVerified ? (
                        <UnVerifyButton email={session?.user?.email!}></UnVerifyButton>
                    ) : (
                        <VerifyButton email={session?.user?.email!}></VerifyButton>
                    )
                    }
                    </div>
                </div>
            </div>
        </div> 
    )
}