import { createSlice } from "@reduxjs/toolkit";

const nutritionsSlice = createSlice({
  name: "nutritions",
  initialState: {
    nutritions: [
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
  reducers: {
    addDish(state, action) {
      state.nutritions.push({
        ...action.payload,
        id: Math.random(),
      });
    },
    deleteDish(state, action) {
      state.nutritions = state.nutritions.filter(
        (dish) => dish.id !== action.payload
      );
    },
  },
});

export const { deleteDish, addDish } = nutritionsSlice.actions;

export default nutritionsSlice.reducer;
