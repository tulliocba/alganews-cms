import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { Post, PostService } from "cms-alganews-sdk";

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async function (query: Post.Query) {
    return await PostService.getAllPosts(query);
  }
);

interface PostSliceState {
  paginated?: Post.Paginated;
  loading: boolean;
  counter: number;
}

const initialState: PostSliceState = {
  loading: false,
  counter: 0,
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 1,
    content: [],
  },
};

export const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.paginated = action.payload;
    })
    .addMatcher(isPending(fetchPosts), (state) => {
      state.loading = true;
    })
    .addMatcher(isFulfilled(fetchPosts), (state) => {
      state.loading = false;
    })
    .addMatcher(isRejected(fetchPosts), (state) => {
      state.loading = false;
    });
});
