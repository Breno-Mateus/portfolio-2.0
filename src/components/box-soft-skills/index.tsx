import { BoxSoftSkillsProps } from "./type";

const BoxSoftSkills = ({Icon, title, description} : BoxSoftSkillsProps) => {
    return (
        <div className="bg-colorSecondary flex flex-col items-center gap-4 w-[20rem] lg:w-[15rem] xl:w-[20rem] p-8 rounded-md text-center hover:border-colorStyle hover:border-[1px]">
            <Icon className="text-[4rem]"/>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-sm font-light">{description}</p>
        </div>
    );
};

export default BoxSoftSkills;