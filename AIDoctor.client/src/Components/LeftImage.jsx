import React from "react";
import image from "../assets/leftimage.png";

const LeftImage = () => {
  return (
    <div
      className="w-[50%] h-full relative"
      style={{
        background: "linear-gradient(135deg, #459aff 0%, #6054ff 100%)",
      }}
    >
      <img
        src={image}
        alt="Signup Visual"
        className="w-full h-full object-cover opacity-90 absolute top-0 left-0"
      />
    </div>
  );
};

export default LeftImage;
