import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  provinceId: "",
  regencyId: "",
  districtId: "",
  villageId: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onChangeForm: (state, action) => {
      switch (action.payload.name) {
        case "province":
          state.regencyId = "";
          state.districtId = "";
          state.villageId = "";
          state.provinceId = action.payload.value;
          break;
        case "regency":
          state.districtId = "";
          state.villageId = "";
          state.regencyId = action.payload.value;
          break;
        case "district":
          state.villageId = "";
          state.districtId = action.payload.value;
          break;
        case "village":
          state.villageId = action.payload.value;
          break;
        default:
          break;
      }
    },
  },
});

export const { onChangeForm } = formSlice.actions;

export default formSlice.reducer;
