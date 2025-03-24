import { StackIcons } from "github-automated-repos";
import { cardProjectsProps } from "./type";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

const CardProject = ({ data, ...props }: cardProjectsProps) => {

  const swiper = useSwiper();
  
  return (
    <>
    <div
      className="bg-colorPrimary rounded-md text-colorWhite flex flex-col md:flex-row gap-4"
      {...props}
    >
      <div className="md:w-1/2">
        <img src={data.banner} className="rounded-t-md md:rounded-md w-full h-full" />
      </div>
      
      <div className="flex flex-col gap-4 p-4 md:w-1/2">
        <p className="text-base font-bold">{data.name}</p>
        <p className="text-xs">{data.description}</p>

        <div className="flex gap-4 text-colorWhite text-xs ">
          <a
            href={data.homepage}
            className="bg-colorstyleSecondary rounded-md p-1 hover:cursor-pointer hover:opacity-[0.85]"
          >
            Deploy
          </a>
          <a
            href={data.html_url}
            className="bg-colorstyleSecondary rounded-md p-1 hover:cursor-pointer hover:opacity-[0.75]"
          >
            Github
          </a>
        </div>

        <div className="flex gap-2 px-2 py-4 items-center justify-center">
          {data.topics.map((icon, index) => {
            return (
              <StackIcons key={index} itemTopics={icon} className="stack_Icon" />
            );
          })}
        </div>
      </div>
    </div>

      <div className="text-4xl flex items-center justify-center gap-4 mt-4 md:mt-12">
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
    </>
  );
};

export default CardProject;
