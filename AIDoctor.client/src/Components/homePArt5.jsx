import React from "react";
import { FaStar } from "react-icons/fa";
import user1 from "../../public/user1.png";
import user2 from "../../public/user2.png";
import user3 from "../../public/user3.png";

const testimonials = [
  {
    id: 1,
    name: "Rehan Nawaz",
    role: "Patient",
    image: user1,
    review:
      "The instant medical advice helped me make intensive decisions about my health. It's like having a doctor in my pocket.",
    rating: 5,
  },
  {
    id: 2,
    name: "M.Qasim Ali",
    role: "Healthcare Professional",
    image: user2,
    review:
      "As a healthcare provider, I'm impressed with the economy and results of life of diagnosis. It's a great help behind clinical for patients.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Aaban Rehman Qureshi",
    role: "Regular User",
    image: user3,
    review:
      "This mental health support because has been a game-champion. It's so popular to have someone to talk to 24/7.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Users Say</h2>
        <p className="text-lg text-gray-600 mb-12">Real experiences from people who trust Doctor AI</p>
      </div>

      {/* Testimonials Container with Responsiveness */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md w-80 text-center sm:w-96 md:w-1/3 transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover mb-2 transition-all duration-500 transform hover:scale-110"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
            <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-400 ${index + 1 <= Math.round(testimonial.rating) ? "" : "opacity-50"}`}
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm">Rated {testimonial.rating} Stars</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
