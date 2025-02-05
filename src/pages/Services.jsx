import { motion } from "framer-motion";
import {
  Car,
  Map,
  Utensils,
  Waves,
  Bike,
  Coffee,
  Droplets,
  Leaf,
  Turtle,
  Fence,
  TentTree,
} from "lucide-react";

const transportServices = [
  {
    id: 1,
    name: "Airport Transfer",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80",
    description:
      "Convenient and reliable airport transfer service available for a fixed fee, ensuring a smooth journey to our hotel.",
  },
  {
    id: 2,
    name: "Tour Around Sri Lanka",
    image:
      "https://cdn.africatravelresource.com/cdn/05explore/locations-and-lodges/africa/srilanka/sigiriya/water-garden-sigiriya/0/stills/11sigiriya/018WGS-IM1101-water-garden-sigiriya-1475.jpg",
    description:
      "Explore Sri Lanka's stunning sights with our guided tour, offering a perfect mix of culture, nature, and adventure.",
  },
  {
    id: 3,
    name: "Bicycle, Car and Tuk Tuk Rental",
    image:
      "https://media.istockphoto.com/id/1999953241/photo/coworkers-riding-a-bicycle-at-public-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=bZLZ3ftPRDTBVp4ZT7_yYsHFaw-3xf2MZNUy-A2rzK8=",
    description:
      "Rent a bike, car, or tuk tuk and explore at your own pace with our flexible rental service.",
  },
];

const localAttractions = [
  {
    name: "Brief Garden - Bevis Bawa",
    distance: "6 km",
    description: "Tropical garden designed by Bevis Bawa",
    icon: <Fence className="w-6 h-6" />,
  },
  {
    name: "Bawa Gardens",
    distance: "6 km",
    description: "The gardens designed by Bevis Bawa",
    icon: <Fence className="w-6 h-6" />,
  },
  {
    name: "Lunuganga",
    distance: "6 km",
    description: "Geoffrey Bawa's beautifully landscaped garden estate",
    icon: <Fence className="w-6 h-6" />,
  },
  {
    name: "Kosgoda Turtle Hatchery",
    distance: "13 km",
    description: "Protects and conserves sea turtles",
    icon: <Turtle className="w-6 h-6" />,
  },
  {
    name: "Bandulasenadeera Ground",
    distance: "16 km",
    description: "Popular sports ground",
    icon: <Fence className="w-6 h-6" />,
  },
  {
    name: "Kalutara Bodhiya",
    distance: "18 km",
    description: "Sacred Buddhist temple in Kalutara",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    name: "Honduwa Island",
    distance: "18 km",
    description: "Small island located off Sri Lanka's coast",
    icon: <TentTree className="w-6 h-6" />,
  },
  {
    name: "Bentota Lake",
    distance: "1.8 km",
    description: "Serene freshwater lake",
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    name: "Bentota Beach",
    distance: "1.1 km",
    description: "Popular sandy beach",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    name: "Moragalla Beach",
    distance: "1.7 km",
    description: "Peaceful beach",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    name: "Beru Beach",
    distance: "5 km",
    description: "Quiet, scenic beach",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    name: "Induruwa Beach",
    distance: "5 km",
    description: "Tranquil, less crowded beach",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    name: "Maggona Beach",
    distance: "7 km",
    description: "Calm, peaceful beach",
    icon: <Waves className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your stay with our premium services and explore the best of Sri Lanka with ease and comfort.
          </p>
        </div>

        {/* Transport Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Our Transport Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {transportServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Local Area Guide */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Explore Local Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localAttractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  {attraction.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                <p className="text-gray-600 mb-2">{attraction.distance}</p>
                <p className="text-gray-600">{attraction.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
