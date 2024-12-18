import { Pivot as Hamburger } from 'hamburger-react';
import Breno from "../../assets/foto_breno.jpeg";
import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

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
        <div className="md:hidden flex flex-col items-end">

            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
            )}
            
            <header className="bg-colorPrimary flex flex-col fixed top-0 w-screen">
                <div className="flex items-center justify-between px-[5%] py-2">
                    <img src={Breno} className="w-8 rounded-full border-[1px] border-colorStyle"/>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </header>

            <div className={`${isOpen ? "translate-x-0" : "translate-x-full"} bg-colorSecondary fixed top-0 w-[80%] h-screen flex flex-col gap-28 transition-transform ease-in-out duration-500 z-20`}>
                <div className="flex flex-col items-end px-[5%] py-2">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

                <ul className="flex flex-col items-center gap-8 uppercase text-sm">
                    <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Home</li>
                    <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Sobre</li>
                    <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Habilidades</li>
                    <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Projetos</li>
                    <li className="hover:text-colorStyle hover:cursor-pointer hover:underline">Contato</li>
                </ul>

                <div className="flex gap-4 items-center justify-center text-[1.5rem]">
                    <FaLinkedin />
                    <FaGithubSquare />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
};

export default HeaderMobile;