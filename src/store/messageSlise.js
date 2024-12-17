import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: [
      {
        name: "Иванова Екатерина",
        date: new Date().toISOString(),
        text: "Привет тренировкам",
      },
      {
        name: "Иванова Екатерина",
        date: new Date().toISOString(),
        text: "Привет тренировкам",
      },
      {
        name: "Иванова Екатерина",
        date: new Date().toISOString(),
        text: "Привет тренировкам",
      },
    ],
  },
  reducers: {
    addMessage(state, action) {
      state.messages.push({
        ...action.payload,
        date: new Date().toISOString(),
      });
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
