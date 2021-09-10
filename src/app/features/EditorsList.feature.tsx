import { useEffect } from "react";
import styled from "styled-components";
import { Profile } from "../components/Profile";
import { PostService } from "../../sdk/services/Post.service";

export const EditorsList = () => {

    useEffect(() => {
        const posts = PostService.getAllPosts({
            size: 20,
            page: 2,
            sort: ['id', 'desc']
        });
        console.log(posts);
    }, []);

    return (
        <Wrapper>
            <Profile name="Tulio Gabriel" description="editor há 8 anos" editorId={1} />
            <Profile name="João Silva" description="editor há 6 anos" editorId={1} />
            <Profile name="Maria Aparecida" description="editora há 3 anos" editorId={1} />
            <Profile name="Joana Santos" description="editora há 5 anos" editorId={1} />
            <Profile name="José Sebastião" description="editor há 10 anos" editorId={1} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`;