import { StackIcons } from "github-automated-repos";
import { cardProjectsProps } from "./type";

const CardProject = ({ data, ...props }: cardProjectsProps) => {
  return (
    <div
      className="w-[18rem] min-h-[17rem] bg-colorPrimary rounded-md text-colorWhite flex flex-col
                    md:min-h-[20rem] md:w-[21rem]"
      {...props}
    >
      <div>
        <img src={data.banner} className="rounded-t-md" />
      </div>

      <div className="p-2 flex flex-col gap-2">
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
      </div>

      <div className="flex gap-2 px-2 py-4 items-center justify-center">
        {data.topics.map((icon, index) => {
          return (
            <StackIcons key={index} itemTopics={icon} className="stack_Icon" />
          );
        })}
      </div>
    </div>
  );
};

export default CardProject;
