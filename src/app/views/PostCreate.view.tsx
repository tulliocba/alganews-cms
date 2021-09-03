import usePageTitle from "../../core/hooks/usePageTitle"
import { PostForm } from "../features/PostForm.feature";
import { DefaultLayout } from "../layouts/Default";

export const PostCreateView = () => {
    usePageTitle("Novo post");

    return (
        <DefaultLayout>
            <PostForm />
        </DefaultLayout>
    );
}