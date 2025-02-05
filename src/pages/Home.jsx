import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Car, Droplets, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredRooms = [
  {
    id: 1,
    name: 'Standard Double Room with Fan',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640692.jpg?k=68944130e68c158470979f4f09dd3e0e21e750680374b807fd35ddc9c7b028c4&o=',
    price: 2500,
    amenities: ['Garden view', 'Double bed'],
  },
  {
    id: 2,
    name: 'Standard Double Room',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640809.jpg?k=09bf9c19f033e224508f44ff9e782994c88b91eb197e1980af6d8119417a5d0a&o=',
    price: 4000,
    amenities: ['Garden view', 'Double bed', 'Balcony'],
  },
  {
    id: 3,
    name: 'Deluxe Double Room',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640767.jpg?k=35f0a637442e6393db8c898ab0fd7a4f7ee9f73e5db6785fecd5b8848c2857b3&o=',
    price: 4500,
    amenities: ['Garden View', 'Double bed', 'Balcony'],
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Joshua',
    country: 'Brazil',
    comment: 'Great stay! Friendly staff, clean spacious room, and peaceful vibes. Excellent value and attentive service.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Abdelali',
    country: 'France',
    comment: 'Large comfortable and clean room. The owner is very nice. He put his tuc tuc at free and took us once to the beach and the last day to the bus station.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Kate',
    country: 'United States',
    comment: 'Spacious, cool room with great light and a private balcony. Helpful owner, free beach rides, and secure parking. Peaceful yet close to the main street.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <header>
        <meta name="description" content="JJ Villa - Your cozy escape in Aluthgama, offering beach access, home-cooked meals, and personalized hospitality." />
        <meta property="og:title" content="JJ Villa - Where Comfort Meets Adventure" />
        <meta property="og:description" content="Escape to JJ Villa for a serene coastal retreat in Aluthgama with great hospitality, delicious meals, and access to nearby attractions." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80" />
        <meta property="og:url" content="https://jjvilla.com" />
        <title>JJ Villa - Where Comfort Meets Adventure</title>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80"
            alt="JJ Villa hero view with ocean waves"
            className="w-full h-full object-cover lazyload"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container h-full flex items-center">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              J J Villa, Where Comfort Meets Adventure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Welcome to JJ Villa, Your cozy escape in Aluthgama. We are a small hotel with simple rooms, offering easy access to the beach and home-cooked meals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href='https://www.booking.com/Share-A8tDHH'
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/501724509.jpg?k=4d03017deab5ec96bd57ff295862820302f3dc028df19441feabda41167d557b&o=&hp=1"
                alt="About JJ Villa"
                className="rounded-lg shadow-lg lazyload"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About Our Hotel</h2>
              <p className="text-gray-600 mb-6">
              <b>Escape to JJ Villa</b>, your serene coastal retreat in Aluqamar. Our charming hotel offers an intimate island getaway with all the comforts of home. Unwind in our beautifully appointed rooms, each featuring a flat-screen TV and a private bathroom with a shower. Some rooms even offer a private balcony, perfect for enjoying your morning coffee while taking in the breathtaking garden views.
              </p>
              <p className="text-gray-600 mb-6">
              Discover the best of Aluqamar from our convenient location, just minutes from the pristine beaches and vibrant local markets. When you're not soaking up the sun or exploring the charming fishing villages, relax by our garden terrace or indulge in delicious home-cooked meals at our on-site restaurant.
              </p>
              <p className="text-gray-600 mb-8">
              At JJ Villa, we pride ourselves on providing personalized hospitality. Our attentive staff is dedicated to ensuring your stay is exceptional from the moment you arrive. Let us be your guide to Aluqamar's hidden gems, where unforgettable adventures await. Book your stay today and experience the magic of JJ Villa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Accommodations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={room.image}
                  alt={`Room: ${room.name}`}
                  className="w-full h-64 object-cover lazyload"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">
                    From <b>LKR {room.price}</b> per night
                  </p>
                  <ul className="space-y-2 mb-6">
                    {room.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 mr-2 text-primary" />
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Perfect Location</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Beach Access</h3>
              <p className="text-gray-600">Just 1 km away from Bentota Beach</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Transport</h3>
              <p className="text-gray-600">Close to bus stands, airport, and railway stations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lakeside Proximity</h3>
              <p className="text-gray-600">1.9 km from Bentota Lake</p>
            </div>
          </div>
          <div className="mt-12">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6685316858056!2d79.9962365759449!3d6.436601693554604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22e87f26a8175%3A0xe1f0ecbc790ef2f1!2sJJ%20Villa%20Aluthgama!5e0!3m2!1sen!2slk!4v1738250268711!5m2!1sen!2slk" // Adjust the link for optimal performance
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Guest Experiences</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div className="flex items-end mt-auto">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
