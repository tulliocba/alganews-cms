import { configureStore } from "@reduxjs/toolkit";
import { editorReducer } from "./Editor.store";
import { postReducer } from "./Post.store";

export const store = configureStore({
  reducer: {
    post: postReducer,
    editor: editorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
