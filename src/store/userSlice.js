import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const initialState = getLogoutUserObject();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirebaseData: (state, action) => {
      state.firebaseData = action.payload;
    },
  },
});

export const { setFirebaseData } = userSlice.actions;

export function getLogoutUserObject() {
  return { firebaseData: { status: "loggedOut", serverData: {} } };
}

export const listenToAuthState = () => (dispatch) => {
  console.log("Auth change state enter!");
  onAuthStateChanged(auth, (user) => {
    dispatch(setFirebaseData({ USER: "PIYUSH" }));
  });
};

export const fetchFirebaseDetails = createAsyncThunk(
  "user/fetchFirebaseDetails",
  async () => {}
);

// onAuthStateChanged(auth, (user) => {
//   setAuthReady(true);
//   if (user) {
//     setUser(user);
//   } else {
//     setUser(null);
//   }
// });

export const selectFirebaseData = (state) => {
  console.log("state: ", state);
  return state.user.firebaseData;
};
export default userSlice.reducer;
