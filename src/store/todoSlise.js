import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: 0,
        task: "Составить план занятий",
        date: "20.10.2024 10:00",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi sit, reprehenderit quod perferendis natus laboriosam at eos voluptatibus quam consectetur aperiam ipsum nulla soluta, autem ipsam cumque facilis culpa?",
      },
      {
        id: 0,
        task: "Составить план занятий",
        date: "20.10.2024 10:00",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi sit, reprehenderit quod perferendis natus laboriosam at eos voluptatibus quam consectetur aperiam ipsum nulla soluta, autem ipsam cumque facilis culpa?",
      },
      {
        id: 0,
        task: "Составить план занятий",
        date: "20.10.2024 10:00",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi sit, reprehenderit quod perferendis natus laboriosam at eos voluptatibus quam consectetur aperiam ipsum nulla soluta, autem ipsam cumque facilis culpa?",
      },
      {
        id: 0,
        task: "Составить план занятий",
        date: "20.10.2024 10:00",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nisi sit, reprehenderit quod perferendis natus laboriosam at eos voluptatibus quam consectetur aperiam ipsum nulla soluta, autem ipsam cumque facilis culpa?",
      },
      {
        id: 0,
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
    toggleTodoComplete(state, action) {
      // const toggletTodo = state.todos.find(
      //   (todo) => todo.id === action.payload.id
      // );
      // toggletTodo.completed = !toggletTodo.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
