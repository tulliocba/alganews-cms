import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { Post, PostService } from "cms-alganews-sdk";

interface PostSliceState {
  paginated?: Post.Paginated;
  fetching?: boolean;
}

const initialState: PostSliceState = {
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 1,
    content: [],
  },
  fetching: false,
};

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async function (query: Post.Query) {
    return await PostService.getAllPosts(query);
  }
);

export const postReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPosts.fulfilled, (state, action) => {
    state.paginated = action.payload;
  });
});
