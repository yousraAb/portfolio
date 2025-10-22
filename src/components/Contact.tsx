// const Contact: React.FC = () => {
//   return (
//     <section id="contact" className="py-20 px-4 bg-gray-100 text-gray-900">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
//         <p className="mb-4">Interested in working together? Let’s talk!</p>
//         <p className="mb-2">📧 yousraabid93@gmail.com</p>
//         <p>📍 Marrakech, Morocco</p>
//         <div className="mt-4">
//           <a
//             href="https://www.linkedin.com/in/yousra-abid/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-indigo-600 hover:underline"
//           >
//             LinkedIn Profile
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const email = "yousraabid93@gmail.com";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id",   // replace with your EmailJS service ID
        "your_template_id",  // replace with your EmailJS template ID
        formData,
        "your_public_key"    // replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 text-gray-900">
      <ToastContainer />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        <form
          onSubmit={sendEmail}
          className="bg-white shadow-md rounded-lg p-6 mb-10 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="grid gap-4 md:grid-cols-2">

          <a
            href={`mailto:${email}`}
            className="bg-white p-5 shadow flex items-center gap-4 rounded-lg hover:bg-indigo-50 transition"
          >
            <Mail className="text-indigo-600" />
            <span className="text-indigo-700 font-medium">{email}</span>
          </a>


          
          <div className="bg-white p-5 shadow flex items-center gap-4 rounded-lg">
            <MapPin className="text-indigo-600" />
            <span>Marrakech, Morocco</span>
          </div>

          <a
            href="https://www.linkedin.com/in/yousra-abid/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => toast.info("Opening LinkedIn...")}
            className="bg-white p-5 shadow flex items-center gap-4 rounded-lg hover:bg-indigo-50 transition"
          >
            <Linkedin className="text-indigo-600" />
            <span className="text-indigo-700 font-medium">LinkedIn Profile</span>
          </a>


          <a
            href="https://api.whatsapp.com/send?phone=212649922723&text=Hello!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => toast.info("Opening WhatsApp...")}
            className="bg-green-100 p-5 shadow flex items-center gap-4 rounded-lg hover:bg-green-200 transition"
          >
            <MessageCircle className="text-green-600" />
            <span className="text-green-700 font-medium">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
