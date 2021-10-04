import { RootState } from "../store";

export const selectPostsFetching = (state: RootState) => {
    return state.post.fetching;
}