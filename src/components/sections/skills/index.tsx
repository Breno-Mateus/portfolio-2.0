import BoxSkills from "../../box-skills";
import BoxSoftSkills from "../../box-soft-skills";
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
import { RiTeamFill, RiSpeakFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-colorPrimary flex flex-col items-center py-16 px-[10%] gap-20"
    >
      <h1 className="text-center text-3xl md:text-4xl font-bold uppercase">
        Minhas <span className="text-colorStyle">Habilidades</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <BoxSoftSkills
          Icon={RiTeamFill}
          title="Trabalho em Equipe"
          description="Experiência em colaborar com equipes multidisciplinares em projetos de software."
        />
        <BoxSoftSkills
          Icon={RiSpeakFill}
          title="Comunicação"
          description="Capacidade de transmitir ideias de forma clara, seja em equipe ou com clientes."
        />
        <BoxSoftSkills
          Icon={GrUserWorker}
          title="Resolução de Problemas"
          description="Capacidade de identificar e solucionar desafios técnicos e lógicos rapidamente."
        />
      </div>

      <Swiper
        spaceBetween={5}
        slidesPerView={6}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{ delay: 0, disableOnInteraction: false }} // Faz o carrossel rodar sozinho
        modules={[Autoplay]}
        className="w-full m-8 relative -z-10"
      >
        <SwiperSlide><BoxSkills urlImage={React} name="React" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={Html} name="HTML" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={Css} name="CSS" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={JavaScript} name="JavaScript" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={tailwind} name="Tailwind" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={post} name="Postman" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={jest} name="Jest" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={test} name="Testing Library" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={figma} name="Figma" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={vercel} name="Vercel" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={linux} name="Linux" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={Node} name="Node.Js" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={Style} name="Styled-Components" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={Typescript} name="TypeScript" /></SwiperSlide>
        <SwiperSlide><BoxSkills urlImage={Git} name="Git" /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Skills;
