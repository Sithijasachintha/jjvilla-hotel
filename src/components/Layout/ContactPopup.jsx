import { X, Phone, MessageCircle, Mail, Calendar } from "lucide-react";

/**
 * ContactPopup Component
 * Provides users with multiple contact options in a modal.
 * Optimized for SEO, accessibility, and responsiveness.
 */
export default function ContactPopup({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
          aria-label="Close contact popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <h2 id="contact-title" className="text-2xl font-bold text-center text-gray-800 mb-5">
          Contact Us
        </h2>

        {/* Contact Options */}
        <div className="space-y-4">
          {/* Phone Number */}
          <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
            <Phone className="w-6 h-6 text-blue-600" />
            <a
              href="tel:+94724139408"
              className="text-gray-800 font-medium hover:underline"
              aria-label="Call us at +94 72 413 9408"
            >
              Call: +94 72 413 9408
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center space-x-3 p-3 bg-green-100 rounded-lg">
            <MessageCircle className="w-6 h-6 text-green-600" />
            <a
              href="https://wa.me/94724139408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 font-medium hover:underline"
              aria-label="Chat with us on WhatsApp"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg">
            <Mail className="w-6 h-6 text-red-500" />
            <a
              href="mailto:jjvilla190@gmail.com"
              className="text-gray-800 font-medium hover:underline"
              aria-label="Send us an email at info@jjvilla.com"
            >
              Email: jjvilla190@gmail.com
            </a>
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-6">
          <a
            href="https://www.booking.com/Share-A8tDHH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-blue-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 transition w-full"
            aria-label="Book your stay now"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
