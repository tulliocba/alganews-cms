import usePageTitle from "../../core/hooks/usePageTitle";
import { EditorsList } from "../features/EditorsList.feature";
import { DefaultLayout } from "../layouts/Default";

export const EditorsListView = () => {
  usePageTitle("Lista de editores");

  return (
    <DefaultLayout>
      <EditorsList />
    </DefaultLayout>
  );
};
