import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r5474wa", // Replace with your EmailJS service ID
        "template_83g8o88", // Replace with your EmailJS template ID
        formRef.current,
        "Pjc44CHoEK9xSOuFo" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Title Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-12">
        Get in Touch
      </h1>

      {/* Form Section */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white p-6 md:p-8 rounded-lg shadow-card max-w-lg mx-auto"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-dark-text font-semibold mb-2 text-sm md:text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary text-sm md:text-base"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-dark-text font-semibold mb-2 text-sm md:text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary text-sm md:text-base"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-dark-text font-semibold mb-2 text-sm md:text-base">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary text-sm md:text-base"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary text-light-text px-6 py-2 rounded-full font-semibold hover:bg-secondary transition transform hover:-translate-y-1 text-sm md:text-base"
        >
          Send Message
        </button>
      </form>

      {/* Success Notification (Floating Popup) */}
      <AnimatePresence>
        {messageSent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-400 to-green-600 text-light-text p-6 rounded-lg shadow-lg z-50"
          >
            <p className="text-sm md:text-base font-medium text-center">
              Your message has been sent successfully! 🎉
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Contact;