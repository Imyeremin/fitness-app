import { createSlice } from "@reduxjs/toolkit";

const castomersSlice = createSlice({
  name: "castomers",
  initialState: {
    castomers: [
      {
        id: Math.random(),
        email: "customer@email.ru",
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
        diet: [
          {
            id: Math.random(),
            dish: "Гречневая каша с курицей",
            class: "Блюдо на обед",
            desc: "100 грамм куриной грудки обжарить без масла и сварить 150 грамм грамм гречневой каши.",
            B: 10,
            J: 50,
            U: 100,
            variant: "primary",
          },
          {
            id: Math.random(),
            dish: "Манная каша",
            class: "Блюдо на завтрак",
            desc: "200 грамм манной каши сварить на обезжиреном молоке.",
            B: 10,
            J: 50,
            U: 100,
            variant: "success",
          },
          {
            id: Math.random(),
            dish: "Салат с курицей",
            class: "Блюдо на ужин",
            desc: "200 грамм овощей на выбор и сварить 100 грамм куриной грудки.",
            B: 10,
            J: 50,
            U: 100,
            variant: "danger",
          },
        ],
      },
      {
        id: Math.random(),
        email: "customer@email.ru",
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
        diet: [
          {
            id: Math.random(),
            dish: "Гречневая каша с курицей",
            class: "Блюдо на обед",
            desc: "100 грамм куриной грудки обжарить без масла и сварить 150 грамм грамм гречневой каши.",
            B: 10,
            J: 50,
            U: 100,
            variant: "primary",
          },
          {
            id: Math.random(),
            dish: "Манная каша",
            class: "Блюдо на завтрак",
            desc: "200 грамм манной каши сварить на обезжиреном молоке.",
            B: 10,
            J: 50,
            U: 100,
            variant: "success",
          },
          {
            id: Math.random(),
            dish: "Салат с курицей",
            class: "Блюдо на ужин",
            desc: "200 грамм овощей на выбор и сварить 100 грамм куриной грудки.",
            B: 10,
            J: 50,
            U: 100,
            variant: "danger",
          },
        ],
      },
      {
        id: Math.random(),
        email: "customer@email.ru",
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
            desc: "Упражнение направлено на усиления мышц спины",
            repetition: 12,
            approaches: 4,
          },
        ],
        diet: [
          {
            id: Math.random(),
            dish: "Гречневая каша с курицей",
            class: "Блюдо на обед",
            desc: "100 грамм куриной грудки обжарить без масла и сварить 150 грамм грамм гречневой каши.",
            B: 10,
            J: 50,
            U: 100,
            variant: "primary",
          },
        ],
      },
    ],
  },
  reducers: {
    addWork(state, action) {
      const cutomerId = action.payload.idCast;
      const newWorkout = action.payload.dataWork;
      const customer = state.castomers.find((x) => x.id === cutomerId);
      customer.workout.push(newWorkout);
    },
    deleteWork(state, action) {
      const customerId = action.payload.idCast;
      const workId = action.payload.idWork;
      const customer = state.castomers.find((x) => x.id === customerId);
      customer.workout = customer.workout.filter((x) => x.id !== workId);
    },
    addNutrition(state, action) {
      const cutomerId = action.payload.idCast;
      const newNutrition = action.payload.dataNutrition;
      const customer = state.castomers.find((x) => x.id === cutomerId);
      customer.diet.push(newNutrition);
    },
    deleteNutrition(state, action) {
      const customerId = action.payload.idCast;
      const nutritionId = action.payload.idNutrition;
      const customer = state.castomers.find((x) => x.id === customerId);
      customer.diet = customer.diet.filter((x) => x.id !== nutritionId);
    },
  },
});

export const { addWork, deleteWork, addNutrition, deleteNutrition } =
  castomersSlice.actions;

export default castomersSlice.reducer;
