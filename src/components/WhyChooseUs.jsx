import { Shield, Clock, DollarSign, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Secure Transactions',
    description: 'Bank-level security protocols to protect your data and transactions',
    icon: Shield,
    delay: 0,
  },
  {
    title: 'Fast Processing',
    description: 'Get your money within 24-48 hours of license verification',
    icon: Clock,
    delay: 0.2,
  },
  {
    title: 'Best Value',
    description: 'Competitive pricing with our market-leading valuation algorithm',
    icon: DollarSign,
    delay: 0.4,
  },
  {
    title: 'Expert Support',
    description: '24/7 dedicated support team to assist you throughout the process',
    icon: Award,
    delay: 0.6,
  },
];

const stats = [
  {
    value: '98%',
    label: 'Customer Satisfaction',
    delay: 0,
  },
  {
    value: '24h',
    label: 'Average Processing Time',
    delay: 0.2,
  },
  {
    value: '$5M+',
    label: 'Licenses Processed',
    delay: 0.4,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="section section-gradient py-16"
      aria-label="Why choose us features and statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          tabIndex={-1} // programmatically focusable if needed
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text mb-4">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Industry-leading features that set us apart
          </p>
        </motion.header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ title, description, icon: Icon, delay }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay }}
              className="feature-card flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl focus-within:shadow-xl transition-shadow duration-300 outline-none"
              tabIndex={0}
              aria-label={`${title}: ${description}`}
              role="group"
            >
              <div className="feature-icon mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </motion.article>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map(({ value, label, delay }) => (
            <motion.section
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay }}
              className="stats-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
              aria-label={`${label}: ${value}`}
              tabIndex={0}
            >
              <div className="stats-number text-4xl font-extrabold text-primary-600 dark:text-primary-400">
                {value}
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{label}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
