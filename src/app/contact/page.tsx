"use client";
import { useState, FormEvent, ChangeEvent } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="project px-4 py-8">
      <h1 className="contact text-3xl md:text-3xl text-teal-500 font-serif text-center mb-10 font-bold animate-fadeInLeft">
        Contact Us
      </h1>

      {/* Desktop View */}
      <div className="contact-container hidden md:block bg-gray-800 border-2 border-teal-500 p-6 rounded-lg animate-fadeInRight">
        <form onSubmit={handleSubmit} className="contact-form space-y-6 ">
          <div className="form-group">
            <label htmlFor="name" className="block text-lg font-semibold text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-lg font-semibold text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="block text-lg font-semibold text-white">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-400 transition-all duration-300">
            Submit
          </button>
        </form>
        {submitted && (
          <p className="thank-you-message mt-6 text-white font-semibold">
            I appreciate your message—thank you!
          </p>
        )}
      </div>

      {/* Mobile View */}
      <div className="contact-container md:hidden bg-gray-800 border-2 border-teal-500 p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="contact-form space-y-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-lg font-semibold text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-lg font-semibold text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="block text-lg font-semibold text-white">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:border-teal-500"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-400 transition-all duration-300">
            Submit
          </button>
        </form>
        {submitted && (
          <p className="thank-you-message mt-6 text-white font-semibold">
            I appreciate your message—thank you!
          </p>
        )}
      </div>

      {/* Social Media Links */}
      <div className="social-links flex justify-center space-x-4 my-8 animate-fadeInBottom">
        <a href="https://www.facebook.com/muahammad.abubakar.142/" target="_blank" rel="noopener noreferrer">
          <img src="/fb.jpg" alt="Facebook" className="social-icon w-10 h-10 transition-transform duration-300 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/muhammad-abdullah-608284302/" target="_blank" rel="noopener noreferrer">
          <img src="/linkdin.png" alt="LinkedIn" className="social-icon w-10 h-10 transition-transform duration-300 hover:scale-110" />
        </a>
        <a href="https://www.instagram.com/muhammadabdullah6156/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.jpg" alt="Instagram" className="social-icon w-10 h-10 transition-transform duration-300 hover:scale-110" />
        </a>
      </div>
    </div>
  );
}
