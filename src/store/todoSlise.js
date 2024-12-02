import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: new Date().toISOString() + 1,
        task: "Составить план занятий",
        date: "20.10.2024 10:00",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi sit, reprehenderit quod perferendis natus laboriosam at eos voluptatibus quam consectetur aperiam ipsum nulla soluta, autem ipsam cumque facilis culpa?",
      },
      {
        id: new Date().toISOString() + 2,
        task: "Составить план занятий",
        date: "20.10.2024 10:00",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi sit, reprehenderit quod perferendis natus laboriosam at eos voluptatibus quam consectetur aperiam ipsum nulla soluta, autem ipsam cumque facilis culpa?",
      },
      {
        id: new Date().toISOString() + 3,
        task: "Составить план занятий",
        date: "20.10.2024 10:00",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi sit, reprehenderit quod perferendis natus laboriosam at eos voluptatibus quam consectetur aperiam ipsum nulla soluta, autem ipsam cumque facilis culpa?",
      },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        ...action.payload,
        id: new Date().toISOString(),
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
