import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { useGitHubAutomatedRepos } from "github-automated-repos";
import CardProject from "../card-project";

const CarouselNavigation = () => {

  const data = useGitHubAutomatedRepos("Breno-Mateus", "keyword");

  return (
    <Swiper
      modules={[Navigation]}
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
    </Swiper>
  );
};

export default CarouselNavigation;
