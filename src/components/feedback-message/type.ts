import { ComponentProps } from "react";

export interface feedbackProps extends ComponentProps<"div"> {
    message: string;
    valid: boolean;
};