import image from "../assets/theLeft.png";

const LeftImage = () => {
  return (
    <div className="w-full h-full relative">
      <img
        src={image}
        alt="Decorative"
        className="w-full h-full object-cover"
        style={{ objectPosition: "center" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(69,154,255,1), rgba(96,84,255,1))",
          opacity: 0.7,
        }}
      ></div>
    </div>
  );
};

export default LeftImage;