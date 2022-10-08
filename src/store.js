import { configureStore } from "@reduxjs/toolkit";
import itemCartReducer from "./components/main/menu/ItemCartSlice.js";

export default configureStore({
  reducer: { cartCounter: itemCartReducer },
});
