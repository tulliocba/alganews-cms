import { InputHTMLAttributes } from "react";
import { Wrapper } from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
}

export const Input = ({ label, ...props }: InputProps) => {
    return (
        <Wrapper>
            {
                label &&
                <span className="Label">
                    { label }:
                </span>
            }

            <input type="text" {...props} />
        </Wrapper>
    );
}