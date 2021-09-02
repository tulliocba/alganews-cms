import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";
import { Message, Title, Wrapper } from "./ErrorDisplay.styles";

export interface ErrorDisplayProps {
    small?: boolean;
    title?: string;
    message?: string;
 }

export const ErrorDisplay = ({ small, title, message }: ErrorDisplayProps) => {
    return (
        <Wrapper>
            <Icon path={mdiAlert} size={small ? "24px" : "48px"}/>
            <Title>{title || "Erro ao renderizar componente"}</Title>
            <Message>{message || "Erro desconhecido"}</Message>
        </Wrapper>
    );
}