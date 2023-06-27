import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // tasks: [{ title: "", createdAt: "", listId: "", tagIds: [], taskId: "" }]
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        console.log("ADD TASK REDUCEER");
        state.tasks.push({ ...action.payload, tagIds: [] });
      },
      prepare: prepareAddTask,
    },
  },
});

function prepareAddTask(title, listId) {
  const taskId = nanoid();
  return { payload: { taskId, title, listId } };
}

export const selectTaskById = (state, taskId) => {
  return state.task.tasks.find((t) => t.taskId === taskId);
};

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
