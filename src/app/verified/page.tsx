import { getUserByEmail } from "@/data"
import { getServerSession } from "next-auth"
import { navigate } from "../componentes/actions"
import Navbar from "../componentes/Navbar"

export default async function Verified() {
    const session = await getServerSession()
    const user = await getUserByEmail(session?.user?.email!)
    if(user?.Verified === true) {
        return(
            
            <div className="flex w-screen h-screen justify-center bg-neutral-900">
                <Navbar></Navbar>
                <div className="flex h-full w-11/12 border-r border-l bg-black border-neutral-500 justify-center items-center">
                    <div className="flex w-full flex-col text-center h-[80%] justify-center items-center">
                        <p className="flex items-center justify-center h-1/6">Felicidades, {session?.user?.name!}! Estas verificado porque puedes ver esta pagina.</p>
                        <div className="flex flex-col h-full w-full items-center">
                            <h1 className="text-neutral-400 h-2/6">Tienes <span className="text-5xl font-bold text-white">4.6564 ETH</span></h1>
                            <div className="flex text-start justify-start w-8/12 border border-neutral-500 rounded-md h-full p-5 flex-col">
                                <h1 className="w-full border-b pb-4 border-neutral-500">Ultimos movimientos</h1>
                                <ul className="flex flex-col pt-4">
                                    <li className="border-b pb-4 border-neutral-500 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quaerat eum sunt beatae amet a quis quidem d</li>
                                    <li className="border-b py-4 border-neutral-500 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quaerat eum sunt beatae amet a quis quidem d</li>
                                    <li className="border-b py-4 border-neutral-500 w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga quaerat eum sunt beatae amet a quis quidem d</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        navigate("/")
    }
    
}