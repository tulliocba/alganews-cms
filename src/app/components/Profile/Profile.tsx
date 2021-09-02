import { Avatar, Description, Name, Info, Wrapper } from "./Profile.styles";

export interface ProfileProps {
    name: string;
    description: string;
}

export const Profile = ({ name, description }: ProfileProps) => {
    return (
        <Wrapper>
            <Avatar src="https://randomuser.me/api/portraits/men/62.jpg" alt="picture" />

            <Info>
                <Name>{name}</Name>

                <Description>{description}</Description>
            </Info>
        </Wrapper>
    );
}