import React from "react";
import image from "../assets/left-image.png";

const LeftImage = () => {
  return (
    <div className="w-full h-full">    
    <img
      src={image}
      alt="Signup Visual"
      className="w-full h-full object-cover  opacity-100"
/>
    </div>
  );
};

export default LeftImage;
