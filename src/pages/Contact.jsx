import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    content: "+94 72 413 9408",
    link: "tel:+94724139408",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: "jjvilla190@gmail.com",
    link: "mailto:jjvilla190@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    content: "No. 54, Bus Deport Road, Ganegama, Aluthgama, Sri Lanka",
    link: "https://maps.app.goo.gl/8zJat53hUDxEfgwbA",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    content: "24/7 Front Desk",
    link: null,
  },
];

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer: "Check-in from 14:00, and check-out is until 14:00.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes, we provide airport transfer services. Please contact us in advance to arrange your pickup.",
  },
  {
    question: "Can I park there?",
    answer:
      "Free private parking is possible on site (reservation is not needed).",
  },
  {
    question: "How far is the hotel center from Aluthgama?",
    answer:
      "Hotel is 400 m from the centre of Aluthgama. All distances are measured in straight lines. Actual travel distances may vary.",
  },
  {
    question: "Do you have free WiFi?",
    answer: "Yes, we provide complimentary high-speed WiFi throughout the property.",
  },
  {
    question: "Can I book a family room here?",
    answer: "Family rooms are available.",
  },
  {
    question: "Are there non-smoking rooms?",
    answer: "Non-smoking rooms are available at this property.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dbu7041", // EmailJS Service ID
        "template_f8lefti", // EmailJS Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Gxn-bUGCHgIseGveL" // EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          Swal.fire({
            title: "Oops...",
            text: "Failed to send message. Please try again.",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "Retry",
          });
        }
      );

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <section aria-labelledby="contact-heading" className="text-center mb-16">
          <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help make your stay perfect. Reach out to us anytime.
          </p>
        </section>

        {/* Contact Information Grid */}
        <section aria-labelledby="contact-info" className="mb-16">
          <h2 id="contact-info" className="sr-only">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-primary transition-colors"
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section aria-labelledby="contact-form" className="mb-16">
          <h2 id="contact-form" className="sr-only">
            Send Us a Message
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6685316858056!2d79.9962365759449!3d6.436601693554604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22e87f26a8175%3A0xe1f0ecbc790ef2f1!2sJJ%20Villa%20Aluthgama!5e0!3m2!1sen!2slk!4v1738250268711!5m2!1sen!2slk"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
                title="Our Location"
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section aria-labelledby="faq-heading" className="bg-gray-50 rounded-lg p-8">
          <h2 id="faq-heading" className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
