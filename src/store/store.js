import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import taskSlice from "./taskSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    list: listSlice,
    task: taskSlice,
    user: userSlice,
  },
});
