import { Post } from "cms-alganews-sdk";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import * as PostAction from "../store/Post.store";

export const usePosts = () => {
  const dispatch = useDispatch();

  const paginatedPosts = useSelector((state: RootState) => state.post.paginated);
  const counter = useSelector((state: RootState) => state.post.counter);
  const loading = useSelector((state: RootState) => state.post.loading);

  const fetchPosts = useCallback(
    async (query: Post.Query) => {
      dispatch(PostAction.fetchPosts(query));
    },
    [dispatch]
  );

  return {
    paginatedPosts,
    loading,
    fetchPosts,
    counter,
  };
};
