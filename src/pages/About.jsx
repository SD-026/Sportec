import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon, TrophyIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { icon: <UsersIcon className="h-8 w-8 text-blue-600" />, value: "10,000+", label: "Active Users" },
    { icon: <GlobeAltIcon className="h-8 w-8 text-green-600" />, value: "50+", label: "Cities" },
    { icon: <TrophyIcon className="h-8 w-8 text-purple-600" />, value: "5,000+", label: "Matches Played" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-[#de1200]/60 to-black bg-clip-text text-transparent">Sportec</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting athletes, enthusiasts, and sports lovers through innovative technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sportec is designed to bring athletes, enthusiasts, and sports lovers together by offering a seamless experience to connect, compete, and collaborate.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our vision is to make sports accessible, engaging, and community-driven by providing a digital space where players can interact, schedule matches, and discover new opportunities.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-blue-800 font-medium">
                  "Join us in shaping the future of sports connectivity!"
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Team celebrating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Team Behind Sportec</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate individuals working together to revolutionize sports connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Sarah Williams", role: "CTO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Michael Chen", role: "Product Manager", img: "https://randomuser.me/api/portraits/men/67.jpg" },
              { name: "Emma Davis", role: "Marketing Director", img: "https://randomuser.me/api/portraits/women/28.jpg" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;