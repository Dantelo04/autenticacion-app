import { getServerSession } from "next-auth"
import Link from "next/link"
import { options } from "../api/auth/[...nextauth]/options"
import Image from "next/image"
import VerifiedLink from "./VerifiedLink"
import { DivideSquare } from "lucide-react"

export default async function Navbar() {
    const session = await getServerSession(options)
    return(
    <nav className="bg-black border-b dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-neutral-500 dark:border-neutral-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/Images/Favicon.png" className="h-8" alt="Logo de preventor"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Preventor</span>
    </Link>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {session ? (
            <div className="flex items-center justify-center space-x-4">
                <p>Hola, {session.user?.name}!</p>
                <Link href="/api/auth/signout" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-2 ring-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700  xl:block hidden duration-200">Cerrar sesión</Link>
            </div>
        ) : (
            <div>
                <Link href="/api/auth/signin" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-2 ring-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700  xl:block hidden duration-200">Iniciar sesión</Link>
            </div>
        )}
        
        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
            <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Inicio</Link>
        </li>
        <li>
            <Link href="/profile" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Perfil</Link>
        </li>
        <li>
            <Link href="/contact" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</Link>
        </li>
            <VerifiedLink></VerifiedLink>
        </ul>
    </div>
    </div>
    </nav>
    )
}