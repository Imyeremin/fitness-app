import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNews } from "../lkAdmin/api/api.js";

const fetchNews = createAsyncThunk("api/getNews", async (_, thinkApi) => {
  return getNews();
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [
      {
        typeSport: "Футбол",
        event: "Кто то забил гол.",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur quis porro aliquam ex numquam beatae assumenda atque harum quidem, consectetur quia provident doloribus omnis labore repudiandae tempora laborum? Molestias!",
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload.articles;
    });
  },
});

export { fetchNews };

export default newsSlice.reducer;
