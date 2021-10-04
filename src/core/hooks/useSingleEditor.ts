import { User, UserService } from "cms-alganews-sdk";
import { useCallback, useState } from "react";

export const useSingleEditor = () => {
  const [editor, setEditor] = useState<User.EditorDetailed>();

  const fetchEditor = useCallback(async (editorId: number) => {
    UserService.getExistingEditor(editorId).then(setEditor);
  }, []);

  return {
    editor,
    fetchEditor,
  };
};
