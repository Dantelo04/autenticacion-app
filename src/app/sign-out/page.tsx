"use client"

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { navigate } from "../componentes/actions";


export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-neutral-900">
      <div className="pt-7 flex flex-col xl:w-3/12 w-full xl:border xl:h-[40%] h-full xl:rounded-xl border-neutral-500 justify-center bg-black">
        <div className="px-7 py-5 xl:mx-0 mx-auto font-bold text-2xl xl:w-full w-11/12 text-center">¿Estas seguro de cerrar sesión?</div>
          <div className="flex border-neutral-500 p-7 pt-6 h-full justify-center xl:w-11/12 w-11/12 mx-auto">
            <button className="flex border border-neutral-500 bg-neutral-800 w-8/12 text-center justify-center items-center h-14 rounded-xl hover:bg-neutral-700 duration-150" onClick={() => signOut({ callbackUrl: '/', redirect:true })}>Cerrar sesión</button>
          </div>
      </div>
    </div>
  );
}
