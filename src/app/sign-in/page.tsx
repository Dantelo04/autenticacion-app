"use client"

import Image from "next/image";
import { FormLogin } from "../componentes/Form";
import Link from "next/link";
import { Suspense } from "react";
import { Divide } from "lucide-react";
import { navigate } from "../componentes/actions";
import { useSession } from "next-auth/react";


export default function SignIn() {
  const {data: session, status} = useSession()
  
  if (status === "authenticated") {
    navigate("/")
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-neutral-900">
      <div className="pt-7 flex flex-col xl:w-4/12 w-full xl:border xl:h-[90%] h-full xl:rounded-xl border-neutral-500 justify-center bg-black">
        <div className="px-7 py-5 xl:mx-0 mx-auto font-bold text-2xl xl:w-full w-11/12 text-center">Iniciar sesión</div>
          <div className="flex border-neutral-500 p-7 pt-12 h-full justify-center xl:w-11/12 w-11/12 mx-auto">
              <FormLogin></FormLogin>
          </div>
          <div className="flex w-6/12 justify-center h-full mx-auto">
            <div className="text-sm"><Link href="/" className="hover:underline">¿Olvidaste tu contraseña?</Link></div>
            <div className="grow text-center">-</div>
            <div className="text-sm"><Link href="/register" className="hover:underline">Registrarse</Link></div>
          </div>
      </div>
    </div>
  );
}
