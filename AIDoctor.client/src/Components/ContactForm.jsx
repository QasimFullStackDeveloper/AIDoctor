import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required');
      return;
    }
    setError('');
    alert('Message sent successfully!');
  };

  return (
    <div className="flex justify-center items-center max-h-screen  bg-[#F9FAFB] opacity-100 ">
      <div className=" p-8 h-[70%]  w-11/12 max-w-2xl">
        <h2 className="text-2xl md:text-2xl font-semibold text-center mb-2">
          Got Questions? Reach Out!
        </h2>
        <p className="text-gray-600 text-center mb-8 text-base">
          We're here to help you with any questions about our AI doctor service.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 block w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-[6.5rem]"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600  text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
