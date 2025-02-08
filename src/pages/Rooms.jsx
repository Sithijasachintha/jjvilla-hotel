import { motion } from 'framer-motion';
import { Wifi, Tv, Coffee, Bath, Wind, Check, Mail, PhoneCall, MessageCircle, ParkingCircle, Utensils, Dumbbell, Key, Ban, Users, ShowerHead, Droplet, Monitor, Camera, Flame, Bus, Globe, Waves, Bike, Shirt, Timer, Luggage, ShoppingCart } from 'lucide-react';
import { Helmet } from "react-helmet";

const rooms = [
  {
    id: 1,
    name: 'Standard Double Room with Fan',
    size: '15m²',
    price: 2500,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640692.jpg?k=68944130e68c158470979f4f09dd3e0e21e750680374b807fd35ddc9c7b028c4&o=',
    amenities: ['Garden view', 'City view', 'Flat-screen TV', 'Free WiFi', 'Private bathroom', 'Double bed', 'Fan', 'Free toiletries'],
    bookingUrl: 'https://www.booking.com/Share-A8tDHH',
  },
  {
    id: 2,
    name: 'Standard Double Room',
    size: '15m²',
    price: 4000,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640809.jpg?k=09bf9c19f033e224508f44ff9e782994c88b91eb197e1980af6d8119417a5d0a&o=',
    amenities: ['Garden view', 'City view', 'Flat-screen TV', 'Air conditioning', 'Free WiFi', 'Private bathroom', 'Double bed', 'Fan', 'Free toiletries', 'Balcony'],
    bookingUrl: 'https://www.booking.com/Share-A8tDHH',
  },
  {
    id: 3,
    name: 'Deluxe Double Room',
    size: '22m²',
    price: 4500,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640767.jpg?k=35f0a637442e6393db8c898ab0fd7a4f7ee9f73e5db6785fecd5b8848c2857b3&o=',
    amenities: ['Garden view', 'City view', 'Flat-screen TV', 'Air conditioning', 'Free WiFi', 'Private bathroom', 'Double bed', 'Fan', 'Free toiletries', 'Balcony'],
    bookingUrl: 'https://www.booking.com/Share-A8tDHH',
  },
];

const facilities = [
  { icon: <Ban className="w-8 h-8 text-primary" />, name: 'Non-smoking rooms' },
  { icon: <Users className="w-8 h-8 text-primary" />, name: 'Family rooms' },
  { icon: <Wind className="w-8 h-8 text-primary" />, name: 'Air conditioning' },
  { icon: <ShowerHead className="w-8 h-8 text-primary" />, name: 'Private bathroom' },
  { icon: <Droplet className="w-8 h-8 text-primary" />, name: 'Free toiletries & towels' },
  { icon: <Wifi className="w-8 h-8 text-primary" />, name: 'Free WiFi' },
  { icon: <Monitor className="w-8 h-8 text-primary" />, name: 'Flat-screen TV' },
  { icon: <Camera className="w-8 h-8 text-primary" />, name: 'CCTV outside property' },
  { icon: <Key className="w-8 h-8 text-primary" />, name: 'Key access' },
  { icon: <Coffee className="w-8 h-8 text-primary" />, name: 'Breakfast in the room' },
  { icon: <Flame className="w-8 h-8 text-primary" />, name: 'BBQ facilities' },
  { icon: <ParkingCircle className="w-8 h-8 text-primary" />, name: 'Free parking' },
  { icon: <Timer className="w-8 h-8 text-primary" />, name: 'Express check-in/check-out' },
  { icon: <Luggage className="w-8 h-8 text-primary" />, name: 'Luggage storage' },
  { icon: <Bus className="w-8 h-8 text-primary" />, name: 'Airport shuttle (additional charge)' },
  { icon: <Globe className="w-8 h-8 text-primary" />, name: 'Tour around Sri Lanka (additional charge)' },
  { icon: <Waves className="w-8 h-8 text-primary" />, name: 'Snorkeling, diving, windsurfing, fishing (additional charge)' },
  { icon: <Bike className="w-8 h-8 text-primary" />, name: 'Bicycle rental (additional charge)' },
  { icon: <Shirt className="w-8 h-8 text-primary" />, name: 'Laundry & dry cleaning (additional charge)' },
  { icon: <ShoppingCart className="w-8 h-8 text-primary" />, name: 'Grocery deliveries (additional charge)' },
];

export default function Rooms() {
  return (
    <div className="py-20">
      <div className="container">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Hotel Rooms & Booking | Luxury Stay</title>
          <meta name="description" content="Choose from a variety of rooms and book your stay at our luxury hotel. Enjoy comfort, convenience, and amazing amenities." />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Hotel Rooms & Booking | Luxury Stay" />
          <meta property="og:description" content="Choose from a variety of rooms and book your stay at our luxury hotel. Enjoy comfort, convenience, and amazing amenities." />
        </Helmet>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Rooms</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience comfort and luxury in our thoughtfully designed rooms and suites.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img src={room.image} alt={`Image of ${room.name}`} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full">
                  From LKR {room.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                <p className="text-gray-600">{room.size}</p>
                <ul className="space-y-2 mt-4">
                  {room.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="bg-gray-100 rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Facilities</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
            Enjoy top-notch facilities to make your stay comfortable and convenient.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="flex flex-col items-center">
                {facility.icon}
                <p className="mt-2 text-gray-600 font-semibold">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Interaction & Booking Section */}
        <div className="bg-gray-100 rounded-lg p-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
            Choose your perfect room and book your stay now. Have any questions? Contact us!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://www.booking.com/Share-A8tDHH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary/90 transition"
            >
              Book Now
            </a>
            <a href="mailto:jjvilla190@gmail.com" className="flex items-center text-primary text-lg font-semibold hover:underline">
              <Mail className="w-5 h-5 mr-2" /> Email Us
            </a>
            <a href="tel:+94724139408" className="flex items-center text-primary text-lg font-semibold hover:underline">
              <PhoneCall className="w-5 h-5 mr-2" /> Call Us
            </a>
            <a href="https://wa.me/94724139408" target="_blank" rel="noopener noreferrer" className="flex items-center text-primary text-lg font-semibold hover:underline">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Booking Policy */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Booking Policy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Check-in/Check-out</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Check-in: From 14:00 to 22:00</li>
                <li>Check-out: From 12:00 to 14:00</li>
                <li>Early check-in subject to availability</li>
                <li>Late check-out available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Cancellation Policy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Free cancellation up to 7 days before arrival</li>
                <li>50% charge for cancellations within 7 days</li>
                <li>No credit card needed</li>
                <li>Special conditions apply for peak season</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Other Policy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>There is no age requirement for check-in</li>
                <li>Cots and extra beds are not available</li>
                <li>Pets and smoking are not allowed</li>
                <li>Only accepts cash payments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
