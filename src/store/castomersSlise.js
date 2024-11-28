import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import imageKat from "./icon/profile.jpg";
import imageAlex from "./icon/profile2.jpg";
import imageUlia from "./icon/profile3.jpeg";
const castomersSlice = createSlice({
  name: "castomers",
  initialState: {
    castomers: [
      {
        id: Math.random(),
        imgProf: "imageKat",
        tel: "+79100000001",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ВТ", "ЧТ", "СБ"],
          time: ["9:00", "16:30", "20:00"],
        },
        workout: [
          {
            id: Math.random(),
            img: "Спина",
            exercise: "Жим",
            desc: "Упражнение направлено на уселения мышц спины",
            repetition: 12,
            approaches: 4,
          },
        ],
        diet: [],
      },
      {
        id: Math.random(),
        imgProf: "imageUlia",
        tel: "+79100000001",
        name: "Савечива Юлия",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Сделать хороший рельеф тела",
        schedule: {
          dayWeek: ["ПН", "СР", "ПТ"],
          time: ["10:00", "12:30", "13:00"],
        },
        workout: [
          {
            id: Math.random(),
            img: "Спина",
            exercise: "Присяд",
            desc: "Упражнение направлено на уселения мышц спины",
            repetition: 12,
            approaches: 4,
          },
        ],
        diet: [],
      },
      {
        id: Math.random(),
        imgProf: "imageAlex",
        tel: "+79100000001",
        name: "Прокопенко Александр",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Набрать мышечную массу",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
        workout: [
          {
            id: Math.random(),
            img: "Спина",
            exercise: "Становая тяга",
            desc: "Упражнение направлено на уселения мышц спины",
            repetition: 12,
            approaches: 4,
          },
        ],
        diet: [],
      },
    ],
  },
  reducers: {
    addWork(state, action) {
      const test = state.castomers.indexOf(`{
        id: Math.random(),
        imgProf: "imageKat",
        tel: "+79100000001",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ВТ", "ЧТ", "СБ"],
          time: ["9:00", "16:30", "20:00"],
        },
        workout: [
          {
            id: Math.random(),
            img: "Спина",
            exercise: "Жим",
            desc: "Упражнение направлено на уселения мышц спины",
            repetition: 12,
            approaches: 4,
          },
        ],
        diet: [],
      }`)

      console.log(test)
    },
  },
});

export const { addWork } = castomersSlice.actions;

export default castomersSlice.reducer;
