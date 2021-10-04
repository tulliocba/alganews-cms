import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import * as Actions from "../store/Editor.store";

export const useEditors = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.editor.fetching);
  const editorsList = useSelector(
    (state: RootState) => state.editor.editorsList
  );

  const fetchAllEditors = useCallback(async () => {
    dispatch(Actions.fetchAllEditors());
  }, [dispatch]);

  return {
    loading,
    editorsList,
    fetchAllEditors,
  };
};
