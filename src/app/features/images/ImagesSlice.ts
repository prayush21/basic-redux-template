import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";

export type Image = {
  id: string;
  author: string;
  width: string;
  height: string;
  url: string;
  download_url: string;
};

export type ImagesState = {
  list: Image[];
};

const initialState: ImagesState = {
  list: [],
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    loadImages: (state, action) => {
      state.list = [...action.payload];
    },
  },
});

export const { loadImages } = imagesSlice.actions;

export const fetchImages = (page = 1, limit = 20) => {
  console.log("run");

  return async function (dispatch: AppDispatch) {
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("limit", limit.toString());
    console.log("params", params.toString());

    fetch(`https://picsum.photos/v2/list?${params.toString()}`)
      .then(async (res) => {
        console.log("res", res);
        const data = await res.json();
        console.log("data", data);

        dispatch(loadImages(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export default imagesSlice.reducer;
