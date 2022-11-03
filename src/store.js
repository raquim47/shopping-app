import { configureStore, createSlice } from "@reduxjs/toolkit";

const detailInfo = createSlice({
  name: "detailInfo",
  initialState: {},
  // 클릭한 상품 정보를 리덕스에 저장
  reducers: {
    setDetailInfo(state, action) {
      return state = action.payload;
    },
  },
});

export const { setDetailInfo } = detailInfo.actions;

export default configureStore({
  reducer: {
    detailInfo: detailInfo.reducer,
  },
});
