import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addTask } from "./taskSlice";

const initialState = {
  lists: [
    { name: "Todo", taskIds: [], emoji: "", listId: nanoid() },
    { name: "Doing", taskIds: [], emoji: "", listId: nanoid() },
    { name: "Completed", taskIds: [], listId: nanoid() },
  ],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addTask: () => {
      return;
    },
    createList: (state, action) => {
      state.lists.push({
        name: action.payload.listName,
        listId: nanoid(),
        taskIds: [],
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, (state, action) => {
      console.log("ACtion from list task : ", action);
      const id = action.payload.listId;
      const list = state.lists.find((list) => list.listId === id);
      list.taskIds.push(action.payload.taskId);
    });
  },
});

export const selectLists = (state) => state.list.lists;

export const selectListById = (state, id) =>
  state.list.lists.find((l) => l.listId === id);

export const selectListsIds = (state) =>
  state.list.lists.map((list) => list.listId);

export const { createList } = listSlice.actions;

export default listSlice.reducer;
