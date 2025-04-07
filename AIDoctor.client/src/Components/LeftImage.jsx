import React from "react";
import image from "../assets/leftimage.png";

const LeftImage = () => {
  return (
    <img
      src={image}
      alt="Signup Visual"
      className="w-full h-full object-cover opacity-90"
    />
  );
};

export default LeftImage;
