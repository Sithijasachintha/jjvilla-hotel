import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ['All', 'Rooms', 'Property', 'Local Area'];

const images = [
  // Your image data here (unchanged)
  {
    id: 1,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640778.webp?k=c6f1beaf1e92527b496a2d45e799a33bb4b3224168aa76f3296674aea723bbe9&o=',
    category: 'Rooms',
    title: 'Deluxe Room',
  },
  {
    id: 2,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640623.webp?k=758ad0bfc397bc66df689ff7cd55d0623f54e8e3eddccc3b311b139d9dedca99&o=',
    category: 'Rooms',
    title: 'Bath Room',
  },
  {
    id: 3,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640767.webp?k=35f0a637442e6393db8c898ab0fd7a4f7ee9f73e5db6785fecd5b8848c2857b3&o=',
    category: 'Rooms',
    title: 'Deluxe Room',
  },
  {
    id: 4,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640684.webp?k=547d88a2520f714d7cd52922445757e6e2bc182f1743e033fa060d58541749b8&o=',
    category: 'Rooms',
    title: 'Deluxe Room',
  },
  {
    id: 5,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640634.webp?k=1682c5cf43162496b320946dfdfdc1567b855e4b12a3e1f62b2b9b10231c15dd&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom With Fan',
  },
  {
    id: 6,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640692.webp?k=68944130e68c158470979f4f09dd3e0e21e750680374b807fd35ddc9c7b028c4&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom With Fan',
  },
  {
    id: 7,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640746.webp?k=241a44aab63830120c2f7e1028b46ec40257cd1dcd526b92c818cb7bf4df154b&o=',
    category: 'Rooms',
    title: 'Bath Room',
  },
  {
    id: 8,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640642.webp?k=a9e7322d63d70ecdf05465a131023c42bb5bfaddacc4a5fdd480395ebecb5c88&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 9,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640653.webp?k=d927db0e2ae08fa8835c3562d669d04e0e4d9c45587231ace11bc8a690aa9afc&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 10,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640723.webp?k=b0a7b80c19f91d005edd810af7f900fa72621e261281472e957e57374878c3b3&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 11,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640785.webp?k=84e9766004813e54ba02a9b3f4a8c1401ae4a91e1ca8eca1545ebfd9a4a1272e&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 12,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501725527.jpg?k=c6b14d9e7c8e90d23c7565f0a21d4ca7bde31f97861946312a123b755cb02da4&o=&hp=1',
    category: 'Property',
    title: 'Breakfest',
  },
  {
    id: 13,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501724509.jpg?k=4d03017deab5ec96bd57ff295862820302f3dc028df19441feabda41167d557b&o=&hp=1',
    category: 'Property',
    title: 'Front Side of Hotel',
  },
  {
    id: 14,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501724206.jpg?k=e4251763e837ac92dba3571fdc6e6baa4b45bfdb3a0043dd515d8e72528115c3&o=&hp=1',
    category: 'Property',
    title: 'Dining Area of Hotel',
  },
  {
    id: 15,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640702.jpg?k=6bac1d9e220489294dcefed5c584d3a8809c252c46d9deae84920e6979607277&o=&hp=1',
    category: 'Property',
    title: 'One of The View',
  },
  {
    id: 16,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501724213.jpg?k=44a62df8a838bb29200d681452bcd92933d888419d262c383d61160df315d570&o=&hp=1',
    category: 'Property',
    title: 'Kitchen',
  },
  {
    id: 17,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640822.jpg?k=05b91d830df5ef50ff696899d7af068cc0b93eb5eff935a23fc0c34110084dc9&o=&hp=1',
    category: 'Property',
    title: 'Interior',
  },
  {
    id: 18,
    url: 'IMG_7059.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 19,
    url: 'IMG_7061.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 20,
    url: 'IMG_7062.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 21,
    url: 'IMG_7063.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 22,
    url: 'IMG_7064.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 23,
    url: 'IMG_7065.webp',
    category: 'Property',
    title: 'Interior',
  },
  {
    id: 24,
    url: 'IMG_7067.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 25,
    url: 'IMG_7068.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 26,
    url: 'IMG_7070.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 27,
    url: 'IMG_7071.webp',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 28,
    url: 'local_1.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 29,
    url: 'local_2.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 30,
    url: 'local_3.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 31,
    url: 'local_4.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 32,
    url: 'local_5.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 33,
    url: 'local_6.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 34,
    url: 'local_7.jpg',
    category: 'Property',
    title: 'Dinner',
  },
  {
    id: 35,
    url: 'local_8.jpg',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 36,
    url: 'local_9.jpg',
    category: 'Property',
    title: 'Exterior',
  },
  {
    id: 37,
    url: 'local_10.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 38,
    url: 'local_11.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 39,
    url: 'local_12.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 40,
    url: 'local_13.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 41,
    url: 'local_14.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 42,
    url: 'local_15.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 43,
    url: 'local_16.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 44,
    url: 'local_17.jpg',
    category: 'Property',
    title: 'Dinner',
  },
  {
    id: 45,
    url: 'local_18.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 46,
    url: 'local_19.jpg',
    category: 'Local Area',
    title: 'Beach',
  },
  {
    id: 47,
    url: 'local_20.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 48,
    url: 'local_21.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 49,
    url: 'local_22.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 50,
    url: 'local_23.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 51,
    url: 'local_24.jpg',
    category: 'Property',
    title: 'Dinner',
  },
  {
    id: 52,
    url: 'local_25.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 53,
    url: 'local_26.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 54,
    url: 'local_27.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 55,
    url: 'local_28.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 56,
    url: 'local_29.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 57,
    url: 'local_30.jpg',
    category: 'Local Area',
    title: 'Tour',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful property through our carefully curated photo gallery.
          </p>
        </header>

        {/* Category Filter */}
        <nav className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-white shadow-sm'
                    : 'hover:bg-white/50'
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.figure
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <figcaption className="text-white text-center">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}