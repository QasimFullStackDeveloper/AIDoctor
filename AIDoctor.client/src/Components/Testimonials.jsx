import React from "react";
import { FaStar } from "react-icons/fa";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

const testimonials = [
  {
    id: 1,
    name: "Rehan Nawaz",
    role: "Patient",
    image: user1,
    review:
      "The instant medical advice helped me make intensive decisions about my health. It's like having a doctor in my pocket.",
    rating: 5,
    background:
      "linear-gradient(135deg, #ECFEFF 0%, #FFFFFF 100%)", // Simplified gradient
  },
  {
    id: 2,
    name: "M.Qasim Ali",
    role: "Healthcare Professional",
    image: user2,
    review:
      "As a healthcare provider, I'm impressed with the economy and results of life of diagnosis. It's a great help behind clinical for patients.",
    rating: 4.5,
    background:
      "linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%)", // Simplified gradient
  },
  {
    id: 3,
    name: "Aaban Rehman Qureshi",
    role: "Regular User",
    image: user3,
    review:
      "This mental health support because has been a game-champion. It's so popular to have someone to talk to 24/7.",
    rating: 5,
    background:
      "linear-gradient(135deg, #FDF2F8 0%, #FFFFFF 100%)", // Simplified gradient
  },
];

const Testimonials = () => {
  return (
    <section
    className="py-16 px-6 sm:px-8 lg:px-12 pb-32 relative min-h-screen"  // Set min height to full screen
    style={{
      background: "transparent",
    }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-wide">
        What Our Users Say
      </h2>
      <p className="text-xl text-gray-700 mb-14 max-w-2xl mx-auto">
        Real experiences from people who trust Doctor AI
      </p>
    </div>
  
    <div className="flex flex-wrap justify-center gap-8 relative z-10">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          style={{
            background: testimonial.background,
            borderRadius: "8px",
            opacity: 1,
            boxShadow:
              "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
          className="p-8 w-full sm:w-96 md:w-80 lg:w-1/3 xl:w-1/4 flex-shrink-0 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex flex-col items-center mb-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-teal-400 shadow-lg transition-all duration-500 transform hover:scale-110"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
          <p className="text-gray-700 italic mb-6">{`"${testimonial.review}"`}</p>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, starIdx) => (
              <FaStar
                key={starIdx}
                className={`text-yellow-500 ${
                  starIdx + 1 <= Math.round(testimonial.rating)
                    ? ""
                    : "opacity-50"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 text-sm">
            Rated {testimonial.rating} Stars
          </p>
        </div>
      ))}
    </div>
  
    {/* Pagination Buttons */}
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 flex gap-3 z-10">
      {[0, 1, 2, 3].map((i) => (
        <button
          key={i}
          className={`w-3 h-3 rounded-full ${
            i === 0 ? "bg-blue-600" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  </section>
  
  );
};

export default Testimonials;
