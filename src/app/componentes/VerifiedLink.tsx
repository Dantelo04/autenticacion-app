import { getUserByEmail } from "@/data"
import { getServerSession } from "next-auth"
import Link from "next/link"

export default async function VerifiedLink() {
    const session = await getServerSession()
    const user = await getUserByEmail(session?.user?.email!)
    if(user?.Verified === true) {
        return(
            <li>
                <Link href="/verified" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Verificado</Link>
            </li>
        )
    } else {
        return <li className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <Link href="/profile" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">No estas verificado</Link>
                </li>
    }
}