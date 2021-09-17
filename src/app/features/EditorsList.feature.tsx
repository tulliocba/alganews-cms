import { useEffect, useState } from "react";
import styled from "styled-components";
import { Profile } from "../components/Profile";
import { User } from "../../sdk/@types";
import { UserService } from "../../sdk/services/User.service";
import { getEditorDescription } from "../../sdk/utils/getEditorDescription";
import { withBoundaryError } from "../../core/hoc/withBondaryError";

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