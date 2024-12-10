import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // For showing success/error messages

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(""); // Reset status message

    emailjs
      .sendForm(
        "service_lro7pvk", // Replace with your EmailJS service ID
        "contact_form", // Replace with your EmailJS template ID
        form.current,
        "hYGqwudyjyxdi0I3T" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset(); // Reset the form fields
        },
        () => {
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let&apos;s Talk
            </h3>
            <p>I&apos;m open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a
                href="mailto:dhritimanroy1511@gmail.com"
                className="hover:underline"
              >
                dhritimanroy1511@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+91-9863380679</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Agartala, Tripura, India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
              {status && (
                <p className="mt-4 text-sm text-center text-green-400">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
