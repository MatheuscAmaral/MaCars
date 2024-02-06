import { Container } from "@/components/container"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import carro from  '../../assets/chevrolet-cruze-1.4-turbo-lt-16v-flex-4p-automatico-wmimagem13091086575.jpg'
import { FaSearch } from "react-icons/fa";

const icon = [
    <FaSearch/>
]

export const Home = () => {
    return(
        <Container>
            <section className="flex w-full max-w-4xl mx-auto items-center space-x-2 bg-gray-50 rounded-xl p-5">
                <Input type="text" placeholder="Digite o nome do carro..." />
                <Button value={icon} type="submit">Subscribe</Button>
            </section>

            <h1 className="text-center my-10 text-2xl font-semibold">
                Carros novos e usados em todo o Brasil
            </h1>

            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 ">
                <section className="w-full lg:w-96 transition-all">
                    <img src={carro}  className=" w-full rounded-t-lg" />

                    <div className=" rounded-b-lg shadow-sm px-3 py-4">
                        <p className="text-xl font-medium">Jaguar Face </p>
                        <p className="text-lg font-normal mt-1">2016/2017 ° 26099km</p>

                        <h4 className="text-2xl font-bold mt-7 mb-2">R$ 239.000,00</h4>

                        <hr />

                        <p className="mt-2">São paulo - SP</p>
                    </div>
                </section>

                <section className=" w-full lg:w-96 transition-all">
                    <img src={carro} className=" w-full rounded-t-lg" />

                    <div className=" rounded-b-lg shadow-sm px-3 py-4">
                        <p className="text-xl font-medium">Jaguar Face </p>
                        <p className="text-lg font-normal mt-1">2016/2017 ° 26099km</p>

                        <h4 className="text-2xl font-bold mt-7 mb-2">R$ 239.000,00</h4>

                        <hr />

                        <p className="mt-2">São paulo - SP</p>
                    </div>
                </section>
                <section className=" w-full lg:w-96 transition-all">
                    <img src={carro} className=" w-full rounded-t-lg" />

                    <div className=" rounded-b-lg shadow-sm px-3 py-4">
                        <p className="text-xl font-medium">Jaguar Face </p>
                        <p className="text-lg font-normal mt-1">2016/2017 ° 26099km</p>

                        <h4 className="text-2xl font-bold mt-7 mb-2">R$ 239.000,00</h4>

                        <hr />

                        <p className="mt-2">São paulo - SP</p>
                    </div>
                </section>
                <section className=" w-full lg:w-96 transition-all">
                    <img src={carro} className=" w-full rounded-t-lg" />

                    <div className=" rounded-b-lg shadow-sm px-3 py-4">
                        <p className="text-xl font-medium">Jaguar Face </p>
                        <p className="text-lg font-normal mt-1">2016/2017 ° 26099km</p>

                        <h4 className="text-2xl font-bold mt-7 mb-2">R$ 239.000,00</h4>

                        <hr />

                        <p className="mt-2">São paulo - SP</p>
                    </div>
                </section>
            </main>

        </Container>
    )
}
