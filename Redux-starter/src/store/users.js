import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    // actions => action handlers
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;

// Memoization
// users => get unresolved users from the cache
export const getUnresolvedBugsMember = createSelector(
  (state) => state.entities.members,
  (users) => users.filter((bug) => !bug.resolved)
);
