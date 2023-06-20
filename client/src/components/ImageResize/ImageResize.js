import React from "react";
import { Img } from "react-image";

const ImageResize = ({ imageUrl, width, height, className }) => {
  const combinedClassName = `rounded ${className}`;

  return (
    <Img
      src={imageUrl}
      width={width}
      height={height}
      className={combinedClassName}
      alt="MyImage"
    />
  );
};

export default ImageResize;
