import { Avatar, Description, Name, Info, Wrapper } from "./Profile.styles";

export interface ProfileProps {
    name: string;
    description: string;
    editorId: number;
    avatarUrl?: string;
}

export const Profile = ({ name, description, editorId, avatarUrl }: ProfileProps) => {
    return (
        <Wrapper to={`/editores/${editorId}`}>
            <Avatar src={avatarUrl} alt="picture" />

            <Info>
                <Name>{name}</Name>

                <Description>{description}</Description>
            </Info>
        </Wrapper>
    );
}