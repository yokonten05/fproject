import React from "react";
import { Img } from "react-image";

const ImageResize = ({ imageUrl }) => {
  return (
    <Img
      src={imageUrl}
      width={80}
      height={80}
      className="rounded"
      alt="MyImage"
    />
  );
};

export default ImageResize;
