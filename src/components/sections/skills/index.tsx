import BoxSkills from "../../box-skills";
//images skills
import Html from "../../../assets/Skills_Image/html-5.png";
import Css from "../../../assets/Skills_Image/css-3.png";
import JavaScript from "../../../assets/Skills_Image/js.png";
import React from "../../../assets/Skills_Image/react.png";
import Git from "../../../assets/Skills_Image/git.png";
import Typescript from "../../../assets/Skills_Image/Typescript.png";
import Style from "../../../assets/Skills_Image/stylecomponents.svg";
import Node from "../../../assets/Skills_Image/nodejs.png";
import linux from "../../../assets/Skills_Image/linux.png";
import tailwind from "../../../assets/Skills_Image/Tailwind CSS.png";
import vercel from "../../../assets/Skills_Image/Vercel.png";
import figma from "../../../assets/Skills_Image/figma.png";
import test from "../../../assets/Skills_Image/Testing-Library.svg";
import jest from "../../../assets/Skills_Image/jest.svg";
import post from "../../../assets/Skills_Image/postman.png";

const Skills = () => {
    return (
        <section id="skills" className="bg-colorPrimary flex flex-col items-center py-16 px-[10%] gap-20">
            <h1 className="text-center text-3xl md:text-4xl font-bold uppercase">Minhas <span className="text-colorStyle">Habilidades</span></h1>
            <div className="flex flex-wrap items-center justify-center gap-12">
                <BoxSkills urlImage={React} name="React"/>
                <BoxSkills urlImage={Html} name="HTML"/>
                <BoxSkills urlImage={Css} name="CSS"/>
                <BoxSkills urlImage={JavaScript} name="JavaScript"/>
                <BoxSkills urlImage={tailwind} name="Tailwind"/>
                <BoxSkills urlImage={post} name="Postman"/>
                <BoxSkills urlImage={jest} name="Jest"/>
                <BoxSkills urlImage={test} name="Testing Library"/>
                <BoxSkills urlImage={figma} name="Figma"/>
                <BoxSkills urlImage={vercel} name="Vercel"/>
                <BoxSkills urlImage={linux} name="Linux"/>
                <BoxSkills urlImage={Node} name="Node.Js"/>
                <BoxSkills urlImage={Style} name="Styled-Components"/>
                <BoxSkills urlImage={Typescript} name="TypeScript"/>
                <BoxSkills urlImage={Git} name="Git"/>
            </div>
        </section>
    )
};

export default Skills;