import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserGroupIcon, CalendarIcon, MapPinIcon, ChartBarIcon, BellIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: <UserGroupIcon className="h-10 w-10 text-de1200" />,
      title: "Player Networking",
      description: "Connect with fellow athletes, create teams, and build your sports community.",
      details: [
        "Find players of similar skill level",
        "Create and manage your teams",
        "Join sports communities in your area"
      ]
    },
    {
      icon: <CalendarIcon className="h-10 w-10 text-de1200" />,
      title: "Match Scheduling",
      description: "Plan games, find opponents, and manage team schedules in a few taps.",
      details: [
        "Easy scheduling interface",
        "Automatic notifications",
        "Sync with your calendar"
      ]
    },
    {
      icon: <MapPinIcon className="h-10 w-10 text-de1200" />,
      title: "Venue Finder",
      description: "Discover nearby sports complexes and book venues for your matches.",
      details: [
        "Real-time availability",
        "Ratings and reviews",
        "Instant booking"
      ]
    },
    {
      icon: <ChartBarIcon className="h-10 w-10 text-de1200" />,
      title: "Performance Tracking",
      description: "Monitor your progress and get insights to improve your game.",
      details: [
        "Match statistics",
        "Skill progression",
        "Personalized feedback"
      ]
    },
    {
      icon: <BellIcon className="h-10 w-10 text-de1200" />,
      title: "Notifications",
      description: "Stay updated with match reminders, friend requests, and more.",
      details: [
        "Customizable alerts",
        "Push notifications",
        "Email summaries"
      ]
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-de1200" />,
      title: "Community Chat",
      description: "Communicate with your team and opponents seamlessly.",
      details: [
        "Group and private chats",
        "Media sharing",
        "Event discussions"
      ]
    }
  ];

  return (
    <div className="bg-white">
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
      <section className="relative py-20 bg-dark text-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-accent">Features</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to connect, compete, and grow in your favorite sports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={ref} className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How Sportec Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get started in just a few simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Create Profile", description: "Sign up and set up your sports profile" },
              { step: "2", title: "Find Players", description: "Connect with athletes in your area" },
              { step: "3", title: "Schedule Matches", description: "Organize games with your network" },
              { step: "4", title: "Play & Improve", description: "Enjoy the game and track progress" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md text-center border-t-4 border-accent"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-light text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;