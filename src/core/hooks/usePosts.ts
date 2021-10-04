import { Post } from "cms-alganews-sdk";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaginatedPosts } from "../selectors/selectPaginatedPosts";
import { selectPostsFetching } from "../selectors/selectPostsFetching";
import * as PostAction from "../store/Post.slice";

export const usePosts = () => {
  const dispatch = useDispatch();

  const paginatedPosts = useSelector(selectPaginatedPosts);

  const loading = useSelector(selectPostsFetching);

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
  };
};
