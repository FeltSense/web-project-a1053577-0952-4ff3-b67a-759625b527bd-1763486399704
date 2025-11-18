import { Utensils, Users, Calendar, Award } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Experience culinary artistry with our expertly crafted seasonal menus featuring locally sourced ingredients and innovative techniques.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    },
    {
      icon: Users,
      title: 'Private Events',
      description: 'Host unforgettable celebrations in our elegant private dining spaces, complete with personalized menus and dedicated service.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    },
    {
      icon: Calendar,
      title: 'Catering Services',
      description: 'Bring restaurant-quality cuisine to your venue with our full-service catering for corporate events, weddings, and special occasions.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    },
    {
      icon: Award,
      title: 'Chef\'s Table',
      description: 'Enjoy an exclusive culinary journey with our chef\'s tasting menu, featuring wine pairings and an intimate kitchen experience.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate dinners to grand celebrations, we deliver exceptional culinary experiences tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-amber-600 p-3 rounded-full">
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}