import CardProject from "../../card-project";
import { useGitHubAutomatedRepos } from "github-automated-repos";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Projects = () => {
  const data = useGitHubAutomatedRepos("Breno-Mateus", "keyword");

  if (!data || data.length === 0) {
    return <p className="text-center text-lg">Nenhum projeto encontrado.</p>;
  };  

  return (
    <section
      id="projects"
      className="bg-colorSecondary flex flex-col items-center py-16 md:px-[10%] gap-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold uppercase">
        Meus <span className="text-colorStyle">Projetos</span>
      </h2>

      <div className="w-full px-4 md:px-0 max-w-3xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop
          className="w-full"
        >
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <CardProject data={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
