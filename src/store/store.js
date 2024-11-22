import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlise";
import newsSlise from "./newsSlise";
import messageSlise from "./messageSlise"

export default configureStore({
  reducer: {
    todos: todoReduser,
    news: newsSlise,
    messages: messageSlise,
  }
});
