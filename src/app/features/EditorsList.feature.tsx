import styled from "styled-components";
import { Profile } from "../components/Profile";


export const EditorsList = () => {
    return (
        <Wrapper>
            <Profile name="Tulio Gabriel" description="editor há 8 anos"/>
            <Profile name="João Silva" description="editor há 6 anos"/>
            <Profile name="Maria Aparecida" description="editora há 3 anos"/>
            <Profile name="Joana Santos" description="editora há 5 anos"/>
            <Profile name="José Sebastião" description="editor há 10 anos"/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`;