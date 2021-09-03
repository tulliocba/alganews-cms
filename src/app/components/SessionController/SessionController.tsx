import { Button } from "../Button/Button";
import { Avatar, Name, Description } from "./SessionController.styles";
import { Wrapper } from "./SessionController.styles";

export interface SessionControllerProps {
    name: string;
    description: string;
    onLogout: () => any
}


export const SessionController = ({ name, description, onLogout }: SessionControllerProps) => {
    return (
        <Wrapper>
            <Avatar src="https://randomuser.me/api/portraits/men/62.jpg" alt="Picture" />

            <Name>{name}</Name>
            <Description>{description}</Description>

            <Button
                variant="danger"
                label="Logout"
                onClick={onLogout} 
            />

        </Wrapper>
    );
}