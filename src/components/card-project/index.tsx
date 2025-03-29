import { StackIcons } from "github-automated-repos";
import { cardProjectsProps } from "./type";

const CardProject = ({ data, ...props }: cardProjectsProps) => {  
  return (
    <div
      className="bg-colorPrimary rounded-md text-colorWhite flex flex-col md:flex-row gap-4 max-h-[36rem] md:max-h-56"
      {...props}
    >
      <div className="md:w-1/2">
        <img src={data.banner} className="rounded-t-md md:rounded-md w-full h-full" alt={`Banner do projeto ${data.name}`}/>
      </div>
      
      <div className="flex flex-col justify-between gap-4 p-4 md:w-1/2">
        <p className="text-base font-bold">{data.name}</p>
        <p className="text-xs overflow-hidden text-ellipsis line-clamp-2 break-words">{data.description}</p>

        <div className="flex gap-4 text-colorWhite text-xs ">
          <a
            href={data.homepage}
            className="bg-colorstyleSecondary rounded-md p-1 hover:cursor-pointer hover:opacity-[0.85]"
            aria-label={`Ir para o deploy do projeto ${data.name}`}
          >
            Deploy
          </a>
          <a
            href={data.html_url}
            className="bg-colorstyleSecondary rounded-md p-1 hover:cursor-pointer hover:opacity-[0.75]"
            aria-label={`Ir para o repositório no Github do projeto ${data.name}`}
          >
            Github
          </a>
        </div>

        <div className="flex gap-2 px-2 py-4 items-center justify-center">
          {data.topics.map((icon, index) => {
            return (
              <StackIcons key={index} itemTopics={icon} className="stack_Icon" aria-label={`Tecnologia: ${icon}`}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
