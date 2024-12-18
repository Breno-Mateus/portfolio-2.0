import { inputsProps } from "./type";

const Inputs = ({ htmlForId, label, type } : inputsProps) => {
    return (
        <div className="w-[50%]">
            <label htmlFor={htmlForId}>{label}</label>
            <input type={type} id={htmlForId} className="bg-colorSecondary w-full rounded-md p-2 focus:outline-none focus:bg-colorSecondary"/>
        </div>
    )
};

export default Inputs;