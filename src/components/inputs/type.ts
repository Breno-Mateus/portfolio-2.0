import { ComponentProps } from "react";

export interface inputsProps extends ComponentProps<"input"> {
    htmlForId: string;
    label: string;
    type: string;
}