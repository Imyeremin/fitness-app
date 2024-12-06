import { createSlice } from "@reduxjs/toolkit";

const resaultSlice = createSlice({
  name: "resault",
  initialState: {
    resault: [
      {
        id: 1,
        name: "Екатерина Иванова",
        time: "23:32",
        work: [
          {
            id: Math.random(),
            img: "Руки",
            exercise: "Жим",
            desc: "Упражнение направлено на усиления мышц груди",
            repetition: 12,
            approaches: 4,
          },
          {
            id: Math.random(),
            img: "Ноги",
            exercise: "Приседания",
            desc: "Упражнение направлено на усиления мышц ног",
            repetition: 12,
            approaches: 4,
          },
          {
            id: Math.random(),
            img: "Спина",
            exercise: "Становая",
            desc: "Упражнение направлено на усиления мышц спины",
            repetition: 12,
            approaches: 4,
          },
        ],
      },
    ],
  },
  reducers: {
    addRes(state, action) {
      state.resault.push({
        ...action.payload,
        id: state.resault.length,
      });
    },
    deleteRes(state, action) {
      state.resault = state.resault.filter((res) => res.id !== action.payload);
    },
  },
});

export const { deleteRes, addRes } = resaultSlice.actions;

export default resaultSlice.reducer;
