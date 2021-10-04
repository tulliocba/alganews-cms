import { RootState } from "../store";

export const selectPaginatedPosts = (state: RootState) => state.post.paginated?.content 