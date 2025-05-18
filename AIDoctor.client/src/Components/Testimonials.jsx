import React, { useState } from "react";
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
    background: "linear-gradient(135deg, #ECFEFF 0%, #FFFFFF 100%)",
  },
  {
    id: 2,
    name: "M.Qasim Ali",
    role: "Healthcare Professional",
    image: user2,
    review:
      "As a healthcare provider, I'm impressed with the economy and results of life of diagnosis. It's a great help behind clinical for patients.",
    rating: 4.5,
    background: "linear-gradient(135deg, #FAF5FF 0%, #FFFFFF 100%)",
  },
  {
    id: 3,
    name: "Aaban Rehman Qureshi",
    role: "Regular User",
    image: user3,
    review:
      "This mental health support because has been a game-champion. It's so popular to have someone to talk to 24/7.",
    rating: 5,
    background: "linear-gradient(135deg, #FDF2F8 0%, #FFFFFF 100%)",
  },
  {
    id: 4,
    name: "SaAD Khalid",
    role: "Caregiver",
    image: user2,
    review:
      "Doctor AI has made monitoring my father's medication so much easier. A real stress reliever for families.",
    rating: 5,
    background: "linear-gradient(135deg, #FFFDE7 0%, #FFFFFF 100%)",
  },
  {
    id: 5,
    name: "Dr. Kamran Shah",
    role: "General Practitioner",
    image: user3,
    review:
      "It’s a revolutionary tool in diagnostics. I recommend it to colleagues for its accuracy and efficiency.",
    rating: 4,
    background: "linear-gradient(135deg, #E8F5E9 0%, #FFFFFF 100%)",
  },
  {
    id: 6,
    name: "Hasan Tariq",
    role: "University Student",
    image: user1,
    review:
      "I use it whenever I feel unwell late at night. No more waiting for clinic hours!",
    rating: 4.5,
    background: "linear-gradient(135deg, #F3E5F5 0%, #FFFFFF 100%)",
  },
  {
    id: 7,
    name: "Zeeshan Raza",
    role: "Fitness Coach",
    image: user1,
    review:
      "I advise my clients to use this app for injury prevention and recovery tips. It’s smart and practical.",
    rating: 5,
    background: "linear-gradient(135deg, #E0F7FA 0%, #FFFFFF 100%)",
  },
  {
    id: 8,
    name: "Dr. Saim Ahmed",
    role: "Psychologist",
    image: user2,
    review:
      "The mental health assistance feature is especially effective for initial support and triage.",
    rating: 4.5,
    background: "linear-gradient(135deg, #FCE4EC 0%, #FFFFFF 100%)",
  },
  {
    id: 9,
    name: "Bilal Hassan",
    role: "Tech Entrepreneur",
    image: user3,
    review:
      "It’s like having a health advisor on speed dial. Tech and care combined perfectly.",
    rating: 5,
    background: "linear-gradient(135deg, #F1F8E9 0%, #FFFFFF 100%)",
  },
  {
    id: 10,
    name: "Fatiq Noor",
    role: "Father",
    image: user3,
    review:
      "I use it to check symptoms for my kids. It brings peace of mind before rushing to the hospital.",
    rating: 4.5,
    background: "linear-gradient(135deg, #FFF3E0 0%, #FFFFFF 100%)",
  },
  {
    id: 11,
    name: "Raza Sheikh",
    role: "Business Analyst",
    image: user1,
    review:
      "Quick, reliable, and always available. Great for people with a tight schedule like me.",
    rating: 4,
    background: "linear-gradient(135deg, #ECEFF1 0%, #FFFFFF 100%)",
  },
  {
    id: 12,
    name: "Noman Iqbal",
    role: "Freelancer",
    image: user2,
    review:
      "Whenever I travel, this app becomes my go-to health resource. No worries about being far from clinics.",
    rating: 5,
    background: "linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)",
  },
];


const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section
      className="py-16 px-6 sm:px-8 lg:px-12 relative"
      style={{ background: "transparent" }}
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
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            style={{
              background: testimonial.background,
              borderRadius: "8px",
              opacity: 1,
              boxShadow:
                "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            className="p-8 w-full sm:w-96 md:w-80 lg:w-1/3 xl:w-1/4 flex-shrink-0 text-center"
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-teal-400 shadow-lg"
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
      <div className="flex justify-center items-center gap-3 mt-6 mb-[-1rem]">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentPage ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
