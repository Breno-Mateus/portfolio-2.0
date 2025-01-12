import { FaCircleCheck } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";

import { feedbackProps } from "./type";

const FeedbackMessage = ({message, valid, ...props} : feedbackProps) => {
    return (
        <div className="flex items-center gap-4 bg-colorSecondary p-4 rounded-md text-sm font-light" {...props}>
            <p>{message}</p>
            {valid ? (
                <FaCircleCheck className="text-green-600"/>
            ): (
                <RiErrorWarningFill className="text-red-600"/>
            )}
        </div>
    )
};

export default FeedbackMessage;