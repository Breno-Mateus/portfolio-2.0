import { useSwiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CarouselNavigation = () => {

  const swiper = useSwiper();

  return (
    <div className="md:mt-4 text-4xl flex items-center justify-center gap-4">
      <button
        className="hover:scale-125 transition-all duration-300 ease-in-out"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="hover:scale-125 transition-all duration-300 ease-in-out"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward />
      </button>
    </div>
  )
}

export default CarouselNavigation