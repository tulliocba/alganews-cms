import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Wrapper } from "./Button.styles";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'danger' | 'text' | 'primary';
    label: string;
}

export const Button = ({ variant, label, ref, ...props }: ButtonProps) => {
    return (
        <Wrapper
            variant={variant}
            {...props}
        >
            {label}
        </Wrapper>
    );
}