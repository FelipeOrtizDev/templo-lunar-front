import Link from "next/link";
import Container from "../Container";
import './NavBar.css'
import { FaSearch } from "react-icons/fa";




const NavBar = () => {
    return (
        <>
            <div className="nav">
                <div className="container_nav">
                    <Container>
                        <div className="components_nav md-gap-0">
                            <Link href="/" className="font-mango">
                                E-shop
                            </Link>
                            <div className="search_nav hidden md:block">
                                <input className="search_bar" type="text" placeholder="O que você procura?"></input>
                                <button>
                                <FaSearch></FaSearch>
                                </button>   
                            </div>
                            <div className="flex items-center gap-8 md-gap-12">
                                <div>CartCount</div>
                                <div>UserMenu</div>
                            </div>

                        </div>
                    </Container>

                </div>

            </div>
        </>
    );
}

export default NavBar;