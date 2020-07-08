import configureStore from "./store/configureStore.js";
import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs.js";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// Call an API
// When the promise is resolved => dispatch()
store.dispatch({ type: "error", payload: { message: "An error occurred." } });

// If the promise is rejected => dispatch()

// store.subscribe(() => {
//   console.log("Store changed!");
// });

// store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
