import Image from "next/image";
import foto from '../../public/foto.jpeg'


export function Header(){
    return (
        <header className="w-full">
            <section className="h-80 w-full relative flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="absolute bottom-[-150px] flex flex-col items-center">
                    <Image alt="" src={foto} className="rounded-full object-cover h-64 w-64 border-2 border-slate-300"/>
                    <span className="font-semibold mt-1 text-lg">Rafaela Fontoura</span>
                </div>
            </section>
        </header>
    )
}