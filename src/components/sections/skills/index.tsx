import BoxSkills from "../../box-skills";
import BoxSoftSkills from "../../box-soft-skills";
import { RiTeamFill, RiSpeakFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";
import { skills } from "../../../data/skills";

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
        modules={[Autoplay]}
        slidesPerView={2}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={2000}
        freeMode={true}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5,
          }
        }}
        className="w-full m-8 relative -z-10 opacity-50"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <BoxSkills urlImage={skill.urlImage} name={skill.name}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;
