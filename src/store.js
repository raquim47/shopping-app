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
    },
    increaseCount(state, action) {
      const foundCartData = findCartData(state, action);
      if (foundCartData) {
        foundCartData.count++;
      }
    },
    decreaseCount(state, action) {
      console.log("hi")
      const foundCartData = findCartData(state, action);
      if (foundCartData && foundCartData.count > 1) {
        foundCartData.count--;
      }
    },
    deleteCart(state, action) {
      const foundCartData = findCartData(state, action);
      return state.filter((current) => current !== foundCartData);
    },

    resetCart(state) {
      alert("Your order has been completed");
      return state = [];
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
