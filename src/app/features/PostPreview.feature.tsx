import styled from "styled-components";
import { withBoundaryError } from "../../core/hoc/withBondaryError"
import { MarkdownEditor } from "../components/MarkdownEditor";

interface PostPreviewProps {
    postId: number
}


export const PostPreview = withBoundaryError(({ postId }: PostPreviewProps) => {
    return <>
        <Wrapper>
            features/PostPreview
            <MarkdownEditor 
                readyOnly={true}
            />
        </Wrapper>
    </>
});

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 655px;
    background-color: #f3f8fa;
    border: 1px solid #ccc;
    padding: 24px;
`;