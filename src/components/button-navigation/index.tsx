import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const ButtonNavigation = () => {

  const swiper = useSwiper();

  return(
    <div className="text-4xl flex items-center justify-center gap-4 mt-4 md:mt-12">
      <button
        className="hover:scale-125 transition-all duration-300 ease-in-out"
        onClick={() => swiper.slidePrev()} 
        aria-label="Navegar para o projeto anterior"
      >
        <IoIosArrowBack />
      </button>
      <button
        className="hover:scale-125 transition-all duration-300 ease-in-out"
        onClick={() => swiper.slideNext()}
        aria-label="Navegar para o próximo projeto"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default ButtonNavigation;