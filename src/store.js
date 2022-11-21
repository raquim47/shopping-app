import { configureStore, createSlice } from "@reduxjs/toolkit";

// detail
const detailInfo = createSlice({
  name: "detailInfo",
  initialState: {},
  reducers: {
    setDetailInfo(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setDetailInfo } = detailInfo.actions;

// cart
const findCartData = (state, action) => {
  return state.find(
    (a) => a.id === action.payload.id && a.size === action.payload.size)
}
const setLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
}
const cartData = createSlice({
  name: "cartData",
  initialState: [],
  reducers: {
    addCart(state, action) {
      const foundCartData = findCartData(state, action);
      if (foundCartData) {
        foundCartData.count++;
      } else {
        state.push(action.payload);
      }
      setLocalStorage(state);
    },
    increaseCount(state, action) {
      const foundCartData = findCartData(state, action);
      if (foundCartData) {
        foundCartData.count++;
      }
      setLocalStorage(state);
    },
    decreaseCount(state, action) {
      const foundCartData = findCartData(state, action);
      if (foundCartData && foundCartData.count > 1) {
        foundCartData.count--;
      }
      setLocalStorage(state);
    },
    deleteCart(state, action) {
      const foundCartData = findCartData(state, action);
      const deletedCartData = state.filter((current) => current !== foundCartData);
      setLocalStorage(deletedCartData);
      return deletedCartData;
    },

    resetCart(state, action) {
      setLocalStorage(action.payload);
      return state = action.payload;
    },
  },
});
export const { addCart, increaseCount, decreaseCount, deleteCart, resetCart} =
  cartData.actions;

export default configureStore({
  reducer: {
    detailInfo: detailInfo.reducer,
    cartData: cartData.reducer,
  },
});
