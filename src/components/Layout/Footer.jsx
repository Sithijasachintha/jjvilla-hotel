import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Info (Centered) */}
        <div className="space-y-2 text-sm">
          <h3 className="text-lg font-playfair font-semibold">Contact Us</h3>
          <a href="tel:+94724139408" className="flex items-center justify-center hover:text-accent transition-colors">
            <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>+94 72 413 9408</span>
          </a>
          <a href="mailto:jjvilla190@gmail.com" className="flex items-center justify-center hover:text-accent transition-colors">
            <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>jjvilla190@gmail.com</span>
          </a>
          <p className="flex items-center justify-center">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
            <span>No. 54, Bus Deport Road, Ganegama, Aluthgama, Sri Lanka</span>
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-white/10 pt-2 text-xs">
          <p>&copy; {new Date().getFullYear()} JJ Villa. All rights reserved.</p>
          <p className="mt-1">
            Need a website?{" "}
            <a
              href="https://sithumud.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:underline"
            >
              Hire me
            </a>{" "}
            for professional web development!
          </p>
        </div>
      </div>
    </footer>
  );
}
