import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: {
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
