import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }
    setError("");
    alert("Message sent successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 opacity-0 animate-fadeIn">
      <div className="bg-white p-12 rounded-lg shadow-2xl w-full max-w-3xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl md:text-4xl font-semibold text-center transition-all duration-300 ease-in-out hover:scale-105">
          Got Questions? Reach Out!
        </h2>
        <p className="text-gray-600 text-center mb-8 text-lg">
          We're here to help you with any questions about our AI doctor service.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 transition-all duration-300 ease-in-out transform hover:scale-105"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
