import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const castomersSlice = createSlice({
  name: "castomers",
  initialState: {
    castomers: [
      {
        id: 1,
        tel: "+79100000001",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 2,
        tel: "+79100000002",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 3,
        tel: "+79100000003",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 4,
        tel: "+79100000004",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 5,
        tel: "+79100000005",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 6,
        tel: "+79100000006",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 7,
        tel: "+79100000007",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 8,
        tel: "+79100000008",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 9,
        tel: "+79100000009",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
      {
        id: 10,
        tel: "+79100000010",
        name: "Иванова Екатерина",
        age: 18,
        height: 163,
        weight: 65,
        goal: "Похудеть к лету",
        schedule: {
          dayWeek: ["ПН", "ПН", "ПН"],
          time: ["10:00", "12:30", "13:00"],
        },
      },
    ],
  },
  reducers: {},
});

export const {} = castomersSlice.actions;

export default castomersSlice.reducer;
