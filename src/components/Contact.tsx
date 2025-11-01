// "use client";

// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
// import { motion } from "framer-motion";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     title: "New Contact Message",
//   });

//   const myEmail = "yousraabid93@gmail.com";

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_6v17xqn",
//         "template_k02fnf8",
//         {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//           title: "New Contact Message",
//         },
//         "pJpelVQa1Q404d85Y"
//       )
//       .then(
//         () => {
//           toast.success("✅ Message sent successfully!");
//           setFormData({ name: "", email: "", message: "", title: "" });
//         },
//         (error) => {
//           console.error(error);
//           toast.error("❌ Failed to send message. Try again later!");
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_50%)] pointer-events-none"></div>

//       <div className="max-w-5xl mx-auto relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
//         >
//           Let’s Connect
//         </motion.h2>

//         <motion.form
//           onSubmit={sendEmail}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-8 mb-12 space-y-5 shadow-lg"
//         >
//           <input
//             type="text"
//             placeholder="Your Name"
//             name="name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//             required
//             className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             name="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//             className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition"
//           />

//           <textarea
//             placeholder="Your Message"
//             name="message"
//             rows={5}
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//             required
//             className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition resize-none"
//           />

//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             type="submit"
//             className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>

//         <div className="grid gap-4 md:grid-cols-2">
//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href={`mailto:${myEmail}`}
//             className="flex items-center gap-4 p-5 bg-white/10 border border-gray-800 rounded-xl hover:bg-indigo-500/10 transition"
//           >
//             <Mail className="text-indigo-400" />
//             <span className="font-medium">{myEmail}</span>
//           </motion.a>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-4 p-5 bg-white/10 border border-gray-800 rounded-xl"
//           >
//             <MapPin className="text-indigo-400" />
//             <span>Marrakech, Morocco</span>
//           </motion.div>

//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href="https://www.linkedin.com/in/yousra-abid/"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={() => toast.info("Opening LinkedIn...")}
//             className="flex items-center gap-4 p-5 bg-white/10 border border-gray-800 rounded-xl hover:bg-indigo-500/10 transition"
//           >
//             <Linkedin className="text-indigo-400" />
//             <span className="font-medium">LinkedIn Profile</span>
//           </motion.a>

//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             href="https://api.whatsapp.com/send?phone=212649922723&text=Hello!"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={() => toast.info("Opening WhatsApp...")}
//             className="flex items-center gap-4 p-5 bg-green-500/10 border border-green-700 rounded-xl hover:bg-green-500/20 transition"
//           >
//             <MessageCircle className="text-green-400" />
//             <span className="font-medium">Chat on WhatsApp</span>
//           </motion.a>
//         </div>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default Contact;
"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const myEmail = "yousraabid93@gmail.com";

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      await emailjs.send(
        "service_6v17xqn",
        "template_k02fnf8",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "New Contact Message",
        },
        "pJpelVQa1Q404d85Y"
      );
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to send message. Please try again later!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_50%)] pointer-events-none"
      ></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          id="contact-heading"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Let’s Connect
        </motion.h2>

        <motion.form
          onSubmit={sendEmail}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Contact form"
          className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-8 mb-12 space-y-5 shadow-lg"
        >
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition"
          />

          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition"
          />

          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="w-full bg-transparent border border-gray-700 rounded-lg p-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 outline-none transition resize-none"
          />

          <motion.button
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            type="submit"
            disabled={isSending}
            className={`w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-lg transition-all ${
              isSending
                ? "opacity-70 cursor-not-allowed"
                : "hover:shadow-indigo-500/30"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Contact Info Grid */}
        <div className="grid gap-4 md:grid-cols-2" role="list">
          <motion.a
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            href={`mailto:${myEmail}`}
            aria-label="Send me an email"
            className="flex items-center gap-4 p-5 bg-white/10 border border-gray-800 rounded-xl hover:bg-indigo-500/10 transition"
          >
            <Mail className="text-indigo-400" aria-hidden="true" />
            <span className="font-medium">{myEmail}</span>
          </motion.a>

          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            className="flex items-center gap-4 p-5 bg-white/10 border border-gray-800 rounded-xl"
          >
            <MapPin className="text-indigo-400" aria-hidden="true" />
            <span>Marrakech, Morocco</span>
          </motion.div>

          <motion.a
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            href="https://www.linkedin.com/in/yousra-abid/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => toast.info("Opening LinkedIn...")}
            aria-label="Visit my LinkedIn profile"
            className="flex items-center gap-4 p-5 bg-white/10 border border-gray-800 rounded-xl hover:bg-indigo-500/10 transition"
          >
            <Linkedin className="text-indigo-400" aria-hidden="true" />
            <span className="font-medium">LinkedIn Profile</span>
          </motion.a>

          <motion.a
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            href="https://api.whatsapp.com/send?phone=212649922723&text=Hello!"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => toast.info("Opening WhatsApp...")}
            aria-label="Chat with me on WhatsApp"
            className="flex items-center gap-4 p-5 bg-green-500/10 border border-green-700 rounded-xl hover:bg-green-500/20 transition"
          >
            <MessageCircle className="text-green-400" aria-hidden="true" />
            <span className="font-medium">Chat on WhatsApp</span>
          </motion.a>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={2500} />
    </section>
  );
};

export default Contact;
