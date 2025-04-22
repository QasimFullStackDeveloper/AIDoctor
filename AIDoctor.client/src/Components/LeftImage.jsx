import React from "react";
import image from "../assets/leftimage.png";


const LeftImage = () => {
  return (
    <div className="w-full h-full">
      <img
        src={image}
        alt="Decorative"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LeftImage;
