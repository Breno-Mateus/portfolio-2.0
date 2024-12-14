import { StackIcons } from "github-automated-repos";
import { cardProjectsProps } from "./type";

const CardProject = ({data} : cardProjectsProps) => {
    return (
        <div key={data.id} className="w-[21rem] min-h-[20rem] bg-colorPrimary rounded-md shadow-2xl text-colorWhite flex flex-col">
            <div>
                <img src={data.banner} className="rounded-t-md"/>
            </div>

            <div className="p-2 flex flex-col gap-2">
                <a href={data.html_url} className="text-base font-bold">{data.name}</a>
                <p className="text-xs">{data.description}</p>
                <a href={data.homepage} className="text-colorStyle text-xs">Deploy</a>
            </div>

            <div className="flex gap-2 px-2 py-4 items-center justify-center"> 
                {data.topics.map((icon, index) => {
                    return (
                        <StackIcons key={index} itemTopics={ icon } className="stack_Icon" />
                    )}
                )}
            </div>
        </div>
    )
};

export default CardProject;