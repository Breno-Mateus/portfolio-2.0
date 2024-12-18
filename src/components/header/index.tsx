import Breno from "../../assets/foto_breno.jpeg";

import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-colorPrimary hidden md:flex items-center justify-between fixed top-0 w-screen px-[5%] py-4">
            <img src={Breno} className="w-8 h-8 rounded-full border-[1px] border-colorStyle"/>
            
            <ul className="flex items-center gap-8 uppercase text-sm">
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Home</li>
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Sobre</li>
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Habilidades</li>
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Projetos</li>
                <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Contato</li>
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