import { Pivot as Hamburger } from "hamburger-react";
import Breno from "../../assets/foto_breno.jpeg";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import NavLink from "../nav-link";

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="md:hidden flex flex-col items-end relative z-10">
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10"></div>}

      <header className="bg-colorPrimary flex flex-col fixed top-0 w-screen">
        <div className="flex items-center justify-between px-[5%] py-2">
          <img
            src={Breno}
            className="w-8 rounded-full border-[1px] border-colorStyle"
            alt="Foto de perfil de Breno Mateus"
          />
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </header>

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-colorSecondary fixed top-0 w-[80%] h-screen flex flex-col gap-28 transition-transform ease-in-out duration-500 z-20`}
      >
        <div className="flex flex-col items-end px-[5%] py-2">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <nav>
          <ul className="flex flex-col items-center gap-8 uppercase text-sm">
            <NavLink to="home" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="about" onClick={() => setOpen(false)}>
              Sobre
            </NavLink>
            <NavLink to="skills" onClick={() => setOpen(false)}>
              Habilidades
            </NavLink>
            <NavLink to="projects" onClick={() => setOpen(false)}>
              Projetos
            </NavLink>
            <NavLink to="contact" onClick={() => setOpen(false)}>
              Contato
            </NavLink>
          </ul>
        </nav>

        <div className="flex gap-4 items-center justify-center text-[1.5rem]">
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
      </div>
    </div>
  );
};

export default HeaderMobile;
