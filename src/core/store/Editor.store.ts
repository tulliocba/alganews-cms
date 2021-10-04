// 1 create thunks
// 2 create initial state
// 3 create reducer
// 4 register on main store
// 5 create hook for this store.

import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { User, UserService } from "cms-alganews-sdk";

export const fetchAllEditors = createAsyncThunk(
  "editor/fetchAllEditors",
  async () => {
    return UserService.getAllEditors();
  }
);

interface EditorStoreState {
  fetching: boolean;
  editorsList: User.EditorSummary[];
}

const initialState: EditorStoreState = {
  editorsList: [],
  fetching: false,
};

export const editorReducer = createReducer(initialState, (builder) => {
  const pending = isPending(fetchAllEditors);
  const rejected = isRejected(fetchAllEditors);
  const fulfilled = isFulfilled(fetchAllEditors);

  builder.addCase(fetchAllEditors.fulfilled, (state, action) => {
    state.editorsList = action.payload;
  })
  .addMatcher(pending, (state) => {
      state.fetching = true;
  })
  .addMatcher(rejected, (state) => {
      state.fetching = false;
  })
  .addMatcher(fulfilled, (state) => {
      state.fetching = false;
  });
});
