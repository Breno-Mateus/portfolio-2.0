import CardProject from "../../card-project";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import CarouselNavigation from "../../carousel-navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Projects = () => {
  const data = useGitHubAutomatedRepos("Breno-Mateus", "keyword");

  return (

    <section
      id="projects"
      className="bg-colorSecondary flex flex-col items-center py-16 md:px-[10%] gap-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold uppercase">
        Meus <span className="text-colorStyle">Projetos</span>
      </h1>

      <div className="w-full flex justify-center items-center gap-4">
        <Swiper 
          loop={true} 
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={100}
          className="w-full flex flex-col"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CardProject data={item} />
            </SwiperSlide>
          ))}
          <CarouselNavigation />
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
