import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import taskSlice from "./taskSlice";

export default configureStore({
  reducer: {
    list: listSlice,
    task: taskSlice,
  },
});
