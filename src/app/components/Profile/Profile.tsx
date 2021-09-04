import { Avatar, Description, Name, Info, Wrapper } from "./Profile.styles";

export interface ProfileProps {
    name: string;
    description: string;
    editorId: number;
}

export const Profile = ({ name, description, editorId }: ProfileProps) => {
    return (
        <Wrapper to={`/editores/${editorId}`}>
            <Avatar src="https://randomuser.me/api/portraits/men/62.jpg" alt="picture" />

            <Info>
                <Name>{name}</Name>

                <Description>{description}</Description>
            </Info>
        </Wrapper>
    );
}