import { useParams } from "react-router-dom";
import usePageTitle from "../../core/hooks/usePageTitle"
import { PostForm } from "../features/PostForm.feature";
import { DefaultLayout } from "../layouts/Default";

export const PostEditView = () => {
    usePageTitle("Edit post");

    const params = useParams<{id: string}>();

    return (
        <DefaultLayout>
            <PostForm postId={Number(params.id)}/>
        </DefaultLayout>
    );
}