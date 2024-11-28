import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const coachingSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: [
      {
        id: Math.random(),
        img: "Ноги",
        exercise: "Присидания",
        desc: "Упражнение направлено на уселения мышц ног",
        repetition: 12,
        approaches: 4,
      },
      {
        id: Math.random(),
        img: "Спина",
        exercise: "Становая тяга",
        desc: "Упражнение направлено на уселения мышц спины",
        repetition: 12,
        approaches: 4,
      },
      {
        id: Math.random(),
        img: "Руки",
        exercise: "Жим лежа",
        desc: "Упражнение направлено на уселения мышц груди и рук",
        repetition: 12,
        approaches: 4,
      },
    ],
  },
  reducers: {
    addExercise(state, action) {
      state.exercises.push({
        ...action.payload,
        id: Math.random(),
      });
    },
    deleteExercise(state, action) {
      state.exercises = state.exercises.filter(
        (exercise) => exercise.id !== action.payload
      );
    },
  },
});

export const { deleteExercise, addExercise } = coachingSlice.actions;

export default coachingSlice.reducer;
