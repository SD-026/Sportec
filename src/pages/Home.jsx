import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon, UserGroupIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [featuresRef, featuresInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Updated features with new color theme
  const features = [
    {
      icon: <UserGroupIcon className="h-8 w-8 text-de1200" />,
      title: "Player Networking",
      description: "Connect with fellow athletes, create teams, and build your sports community."
    },
    {
      icon: <CalendarIcon className="h-8 w-8 text-de1200" />,
      title: "Match Scheduling",
      description: "Plan games, find opponents, and manage team schedules in a few taps."
    },
    {
      icon: <MapPinIcon className="h-8 w-8 text-de1200" />,
      title: "Venue Tracker",
      description: "Discover nearby sports complexes and book venues for your matches."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Custom color variables */}
      <style jsx global>{`
        :root {
          --dark: #181818;
          --light: #ffffff;
          --accent: #de1200;
        }
        .text-de1200 {
          color: #de1200;
        }
        .bg-de1200 {
          background-color: #de1200;
        }
        .border-de1200 {
          border-color: #de1200;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-dark text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Connect. Play. <span className="text-accent">Compete.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                The ultimate platform for sports enthusiasts to find players, schedule matches, and discover venues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-light px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-light text-light px-6 py-3 rounded-lg font-medium hover:bg-dark transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="People playing sports" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-light p-4 rounded-lg shadow-lg hidden md:block"
              >
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-full">
                    <UserGroupIcon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Active Players</p>
                    <p className="font-bold text-dark">10,000+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to connect with fellow sports enthusiasts and take your game to the next level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-accent"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Team celebrating" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 blur-xs bg-white/60 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-lg hidden md:block">
                <h3 className="text-xl font-bold text-dark mb-2">Our Mission</h3>
                <p className="text-gray-600">Bringing athletes together through technology</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">About Sportec</h2>
              <p className="text-lg text-gray-600 mb-6">
                Struggling to gather enough players for a match? Searching for a place to play? Or wanting to improve but not knowing where to start? Sportec is for every sports lover who just wants to get out there and play.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you are a professional athlete in search of competitive challenges or a casual player looking to enjoy a weekend game, Sportec is here for you.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-accent font-medium"
              >
                Learn more about us
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sports Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of athletes who are already connecting, competing, and growing through Sportec.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-light text-accent px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Sign Up Now - It's Free!
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;