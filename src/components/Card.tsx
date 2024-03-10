import Image from "next/image";
import Trufa from '../../public/trufa.jpeg'

export function Card(){
    return (
        <div className="border rounded shadow-md p-3 w-72 flex flex-col items-center gap-3">
            <Image alt="" src={Trufa} className="w-36 h-36 object-cover rounded-full"/>

            <h1 className="w-full text-lg text-center font-medium">Trufa Gourmet de brigadeiro</h1>

            <div className="w-full">
                <h2 className="font-medium">Recheio</h2>
                <span>brigadeiro gourmet</span>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <span className="text-xs">Descrição</span>
                <span className="text-xs">Casquinha de chocolate branco Nestlé, recheada com brigadeiro gourmet</span>
                <span className="text-red-500 text-lg text-center font-semibold">R$ 4,50</span>
            </div>
        </div>
    )
}