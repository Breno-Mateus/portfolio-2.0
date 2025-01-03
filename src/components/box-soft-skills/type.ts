import { ComponentProps } from "react";
import { IconType } from "react-icons";

export interface BoxSoftSkillsProps extends ComponentProps<"div"> {
    Icon: IconType;
    title: string;
    description: string;
};