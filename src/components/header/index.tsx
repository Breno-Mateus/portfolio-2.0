import Breno from "../../assets/foto_breno.jpeg";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="bg-colorPrimary hidden md:flex items-center justify-between fixed top-0 w-screen px-[5%] py-4">
            <img src={Breno} className="w-8 h-8 rounded-full border-[1px] border-colorStyle"/>
            
            <ul className="flex items-center gap-8 uppercase text-sm">
                <Link to="home" smooth={true} duration={500} className="hover:text-colorStyle hover:cursor-pointer hover:underline transition duration-500">Home</Link>
                <Link to="about" smooth={true} duration={500} className="hover:text-colorStyle hover:cursor-pointer hover:underline transition duration-500">Sobre</Link>
                <Link to="skills" smooth={true} duration={500} className="hover:text-colorStyle hover:cursor-pointer hover:underline transition duration-500">Habilidades</Link>
                <Link to="projects" smooth={true} duration={500} className="hover:text-colorStyle hover:cursor-pointer hover:underline transition duration-500">Projetos</Link>
                <Link to="contact" smooth={true} duration={500} className="hover:text-colorStyle hover:cursor-pointer hover:underline transition duration-500">Contato</Link>
            </ul>

            <div className="flex gap-4 text-xl">
                <a href="https://www.linkedin.com/in/breno-mateus/"><FaLinkedin className="hover:text-colorStyle transition duration-500"/></a>
                <a href="https://github.com/Breno-Mateus"><FaGithubSquare className="hover:text-colorStyle transition duration-500"/></a>
                <a href="https://www.instagram.com/brenomateusds/"><FaInstagram className="hover:text-colorStyle transition duration-500"/></a>
            </div>
        </header>
    )
};

export default Header;