import Breno from "../../assets/foto_breno.jpeg";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-colorPrimary flex items-center justify-between fixed top-0 w-screen px-[5%] py-4">
            <img src={Breno} className="w-8 h-8 rounded-full border-[1px] border-colorStyle"/>
            
            <ul className="flex items-center gap-8 uppercase text-sm">
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Home</li>
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Sobre</li>
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Habilidades</li>
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Projetos</li>
            </ul>

            <div className="flex gap-4 text-xl">
                <FaLinkedin />
                <FaGithubSquare />
                <FaInstagram />
            </div>
        </header>
    )
};

export default Header;