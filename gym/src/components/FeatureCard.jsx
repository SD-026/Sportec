import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-blue-50 p-4 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;