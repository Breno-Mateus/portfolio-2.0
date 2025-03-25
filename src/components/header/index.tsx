import Breno from "../../assets/foto_breno.jpeg";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import NavLink from "../nav-link";

const Header = () => {
  return (
    <header className="bg-colorPrimary hidden md:flex items-center justify-between fixed top-0 w-screen px-[5%] py-4 z-10">
      <img
        src={Breno}
        className="w-8 h-8 rounded-full border-[1px] border-colorStyle"
        alt="Foto de perfil de Breno Mateus"
      />

      <nav>
        <ul className="flex items-center gap-8 uppercase text-sm">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">Sobre</NavLink>
          <NavLink to="skills">Habilidades</NavLink>
          <NavLink to="projects">Projetos</NavLink>
          <NavLink to="contact">Contato</NavLink>
        </ul>
      </nav>

      <div className="flex gap-4 text-xl">
        <a
          href="https://www.linkedin.com/in/breno-mateus/"
          aria-label="Visitar meu LinkedIn"
        >
          <FaLinkedin className="hover:text-colorStyle transition duration-500" />
        </a>
        <a
          href="https://github.com/Breno-Mateus"
          aria-label="Visitar meu GitHub"
        >
          <FaGithubSquare className="hover:text-colorStyle transition duration-500" />
        </a>
        <a
          href="https://www.instagram.com/brenomateusds/"
          aria-label="Visitar meu Instagram"
        >
          <FaInstagram className="hover:text-colorStyle transition duration-500" />
        </a>
      </div>
    </header>
  );
};

export default Header;
