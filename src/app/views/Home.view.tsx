import usePageTitle from "../../core/hooks/usePageTitle"
import { UserPerformance } from "../features/UserPerformance.feature";
import { Posts } from "../features/Posts.feature";
import { DefaultLayout } from "../layouts/Default";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings.feature";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectPaginatedPosts } from "../../core/selectors/selectPaginatedPosts";

export default function HomeView() {
    usePageTitle('Home')

    const dispatch = useDispatch();
    // creates a local state using as reference the global state.
    const paginatedPosts = useSelector(selectPaginatedPosts);


    return (
        <DefaultLayout>
            <Div>
                <UserTopTags />
                <UserEarnings />

            </Div>

            <UserPerformance />
            <Posts />
        </DefaultLayout>
    );
}

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 32px;
`;