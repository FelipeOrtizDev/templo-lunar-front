import Link from "next/link";
import Container from "../Container";
import RodapeLista from "./RodapeLista";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


const Rodape = () => {
    return (
        <>
            <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                        <RodapeLista>
                            <h3 className="text-base font-bold mb-2">Categorias da loja</h3>
                            <Link href={'#'}>a</Link>
                            <Link href={'#'}>a</Link>
                            <Link href={'#'}>a</Link>
                            <Link href={'#'}>a</Link>
                        </RodapeLista>
                        <RodapeLista>
                            <h3 className="text-base font-bold mb-2">Serviços da loja</h3>
                            <Link href={'#'}>a</Link>
                            <Link href={'#'}>a</Link>
                            <Link href={'#'}>a</Link>
                            <Link href={'#'}>a</Link>
                        </RodapeLista>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-base font-bold mb-2">
                                Sobre nos
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet.
                            </p>
                            <p>&copy; {new Date().getFullYear()} E~SHop. Todos direitos reservados</p>
                        </div>
                        <RodapeLista>
                            <h3 className="text-base font-bold mb-2">
                                Nos Siga
                            </h3>
                            <div className="flex gap-2">
                                <Link href={''}>
                                <AiFillInstagram size={24}></AiFillInstagram >
                                </Link>
                                <Link href={''}>
                                    <AiFillTwitterCircle size={24}></AiFillTwitterCircle>
                                </Link>
                            </div>
                        </RodapeLista>
                    </div>
                </Container>
            </footer>
        </>);
}

export default Rodape;