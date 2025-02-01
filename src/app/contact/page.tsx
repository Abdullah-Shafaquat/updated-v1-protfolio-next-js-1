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

    // Create FormData object and append the form data
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);
    formDataObj.append("access_key", "c68c7db3-7a67-49f1-996f-69140065103f"); // Replace with your Web3Forms access key

    // Convert FormData to JSON
    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      // Send the form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully:", result);
        setSubmitted(true); // Show thank you message
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        console.error("Form submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="project px-4 py-8">
      <h1 className="contact text-3xl md:text-3xl text-teal-500 font-serif text-center mb-10 font-bold animate-fadeInLeft">
        Contact Us
      </h1>

      {/* Desktop View */}
      <div className="contact-container hidden md:block bg-gray-800 border-2 border-teal-500 p-6 rounded-lg animate-fadeInRight">
        <form onSubmit={handleSubmit} className="contact-form space-y-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-lg font-semibold text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
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
              placeholder="Email"
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
              placeholder="Type your message here..."
              className="w-full p-3 border  text-black border-gray-300 rounded-md focus:border-teal-500"
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
            <label htmlFor="name" className="block   text-lg font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:border-teal-500"
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
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:border-teal-500"
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
    className="w-full p-3 border border-gray-300 rounded-md  focus:border-teal-500 bg-white text-black placeholder-gray-500"
    placeholder="Type your message here..."
  ></textarea>
</div>

          <button type="submit" className="w-full py-3 bg-teal-500 text-blackrounded-md hover:bg-teal-400 transition-all duration-300">
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
