import ErrorBoundary from "../components/ErrorBoundary";
import { EditorProfile } from "../features/EditorProfile.feature";
import { DefaultLayout } from "../layouts/Default"

export const EditorProfileView = () => {
    return (
        <DefaultLayout>
            <ErrorBoundary>
                <EditorProfile hidePersonalData={false} />
            </ErrorBoundary>
        </DefaultLayout>
    );
}