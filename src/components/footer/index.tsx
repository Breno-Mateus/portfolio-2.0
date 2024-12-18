import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-colorPrimary py-4 px-4 flex flex-col items-center gap-4">
            <h1 className="text-3xl uppercase font-bold">Redes <span className="text-colorStyle">Sociais</span></h1>

            <div className="flex gap-8 text-[2rem]">
                <a href="https://github.com/Breno-Mateus"><FaGithubSquare/></a>
                <a href="https://www.linkedin.com/in/breno-mateus/"><FaLinkedin/></a>
            </div>

            <p className="font-extralight text-center">Copyright©2024 Breno Mateus | Todos os direitos reservados</p>
        </footer>
    )
};

export default Footer;