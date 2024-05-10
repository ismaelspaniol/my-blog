import Image from "next/image";

export default function FistSmartContract() {
    return (
        <main>
            <div className=" p-5 rounded ">
                <p className=" text-4xl font-semibold">Meu primerio post</p>

                <p className="italic">Sub titul</p>
                <div id="content">
                    <p className="text-left pb-4">
                        Você sabe que ao utilizar instâncias de interfaces não é
                        necessário destruir o objeto manualmente, utilizando o
                        método Free.
                    </p>
                </div>
            </div>
        </main>
    );
}
