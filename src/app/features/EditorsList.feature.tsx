import { useEffect } from "react";
import styled from "styled-components";
import { Profile } from "../components/Profile";
import { withBoundaryError } from "../../core/hoc/withBondaryError";
import { getEditorDescription } from "cms-alganews-sdk";
import { useEditors } from "../../core/hooks/useEditors";
import Skeleton from "react-loading-skeleton";

export const EditorsList = withBoundaryError(() => {
  const { editorsList, fetchAllEditors } = useEditors();

  useEffect(() => {
    fetchAllEditors();
  }, [fetchAllEditors]);

  if (!editorsList.length) {
    <Wrapper>
      <Skeleton height={83} />
      <Skeleton height={83} />
      <Skeleton height={83} />
    </Wrapper>;
  }

  return (
    <Wrapper>
      {editorsList.map((editor) => (
        <Profile
          key={editor.id}
          name={editor.name}
          description={getEditorDescription(new Date(editor.createdAt))}
          editorId={editor.id}
          avatarUrl={editor.avatarUrls.small}
        />
      ))}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
