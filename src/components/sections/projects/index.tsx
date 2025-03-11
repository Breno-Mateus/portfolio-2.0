import CardProject from "../../card-project";
import { useGitHubAutomatedRepos } from "github-automated-repos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
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

      <div className="w-full flex flex-col items-center gap-4 px-[10%] md:px-0">
        {<Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
          initialSlide={0}
          centeredSlides={true}
          slidesPerView={1}
          className="w-full flex flex-col relative"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CardProject data={item} />
            </SwiperSlide>
          ))}
        </Swiper>}
      </div>
    </section>
  );
};

export default Projects;
