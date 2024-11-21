import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../lkAdmin/api/api.js";

const fetchNews = createAsyncThunk("api/getNews", async (_, thinkApi) => {
  return getNews();
});

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
    messages: [
      {
        name: "Иванова Екатерина",
        date: new Date().toISOString(),
        text: "Привет трнеровкам",
      },
      {
        name: "Иванова Екатерина",
        date: new Date().toISOString(),
        text: "Привет трнеровкам",
      },
      {
        name: "Иванова Екатерина",
        date: new Date().toISOString(),
        text: "Привет трнеровкам",
      },
    ],
    news: [
      {
        typeSport: "Футбол",
        event: "Кто то забил гол.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
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
    addMessage(state, action) {
      state.messages.push({
        ...action.payload,
        date: new Date().toISOString(),
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload.articles;
    });
  },
});

export const { addTodo, deleteTodo, addMessage } = todoSlice.actions;

export { fetchNews };

export default todoSlice.reducer;
