import { useEffect, useState } from "react";
import styled from "styled-components";
import { Profile } from "../components/Profile";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { User } from "cms-alganews-sdk/dist/@types";
import { getEditorDescription, UserService } from "cms-alganews-sdk";

export const EditorsList = withBoundaryError(() => {

    const [editors, setEditors] = useState<User.EditorSummary[]>([])

    useEffect(() => {
        UserService.getAllEditors()
            .then(setEditors);
    }, []);

    return (
        <Wrapper>

            {
                editors.map(editor => (
                    <Profile 
                        key={editor.id} 
                        name={editor.name} 
                        description={getEditorDescription(new Date(editor.createdAt))} 
                        editorId={editor.id}
                        avatarUrl={editor.avatarUrls.small} />
                ))
            }
        </Wrapper>
    );
});

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`;