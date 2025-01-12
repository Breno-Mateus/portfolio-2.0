import { boxSkillsProps } from "./type";

const BoxSkills = ({urlImage, name, ...props} : boxSkillsProps) => {
    return (
        <div className="bg-colorSecondary flex flex-col items-center justify-center gap-2 w-28 h-28 p-1 rounded-md" {...props}>
            <img src={urlImage} className="h-[50%] w-[50%]"/>
            <p className="text-xs font-light text-center">{name}</p>
        </div>
    )
};

export default BoxSkills;