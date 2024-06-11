"use client"

import Image from "next/image";
import { FormRegister } from "../componentes/Form";
import Link from "next/link";
import { Suspense } from "react";


export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-neutral-900">
      <div className="pt-7 flex flex-col xl:w-4/12 w-full xl:border xl:h-[90%] h-full xl:rounded-xl border-neutral-500 justify-center bg-black">
        <div className="px-7 py-5 xl:mx-0 mx-auto font-bold text-2xl xl:w-full w-11/12 text-center">Crear una cuenta</div>
          <div className="flex border-neutral-500 p-7 pt-12 h-full justify-center xl:w-11/12 w-11/12 mx-auto">
            <FormRegister></FormRegister>
          </div>
          <div className="flex w-6/12 justify-center h-full mx-auto">
            <div className="text-sm"><Link href="/sign-in" className="hover:underline">Ya tienes una cuenta?</Link></div>
          </div>
      </div>
    </div>
  );
}
