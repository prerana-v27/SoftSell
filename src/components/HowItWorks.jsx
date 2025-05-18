import { Upload, DollarSign, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Upload License',
    description: 'Provide your software license details securely through our platform.',
    icon: Upload,
    delay: 0,
  },
  {
    title: 'Get Valuation',
    description: 'Receive an instant, competitive valuation for your license.',
    icon: DollarSign,
    delay: 0.2,
  },
  {
    title: 'Get Paid',
    description: 'Secure your payment quickly through our trusted payment system.',
    icon: CreditCard,
    delay: 0.4,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute -top-48 right-0 w-96 h-96 bg-primary-100/20 dark:bg-primary-900/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold gradient-text pb-1"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300"
          >
            Just three easy steps to turn your unused licenses into fast money
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className="relative group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-300 animate-float" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 text-sm text-primary-500 dark:text-primary-300 font-semibold bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded-md shadow-sm">
                    Step {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
