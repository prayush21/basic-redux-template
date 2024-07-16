import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchImages } from "./ImagesSlice";

function Images() {
  const ImagesList = useSelector((state: RootState) => state.images.list);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  return (
    <>
      <div className="">
        {ImagesList.map((image) => {
          return (
            <a target="_blank" href={image.url}>
              <img
                key={image.id}
                alt={image.author}
                src={image.download_url}
                height={300}
                width={400}
                style={{ margin: "1rem 2rem" }}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Images;
