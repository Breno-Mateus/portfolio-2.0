import { StackIcons } from "github-automated-repos";
import { cardProjectsProps } from "./type";

const CardProject = ({ data, ...props }: cardProjectsProps) => {
  return (
    <div
      className="bg-colorPrimary rounded-md text-colorWhite flex gap-4"
      {...props}
    >
      <div className="w-1/2">
        <img src={data.banner} className="rounded-md w-full h-full" />
      </div>
      
      <div className="flex flex-col gap-4 p-4 w-1/2">
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
  );
};

export default CardProject;
