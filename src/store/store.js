import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlise";
import newsSlise from "./newsSlise";
import messageSlise from "./messageSlise";
import castomersSlice from "./castomersSlise";
import nutritionSlise from "./nutritionSlise";

export default configureStore({
  reducer: {
    todos: todoReduser,
    news: newsSlise,
    messages: messageSlise,
    castomers: castomersSlice,
    nutritions: nutritionSlise,
  },
});
