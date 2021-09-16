import usePageTitle from "../../core/hooks/usePageTitle"
import { UserPerformance } from "../features/UserPerformance.feature";
import { Posts } from "../features/Posts.feature";
import { DefaultLayout } from "../layouts/Default";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings.feature";
import styled from "styled-components";
import ErrorBoundary from "../components/ErrorBoundary";

export default function HomeView() {
    usePageTitle('Home')
    return (
        <DefaultLayout>
            <Div>
                <UserTopTags />
                <UserEarnings />

            </Div>

            <UserPerformance />            

            <ErrorBoundary component="posts">
                <Posts />
            </ErrorBoundary>
        </DefaultLayout>
    );
}

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 32px;
`;