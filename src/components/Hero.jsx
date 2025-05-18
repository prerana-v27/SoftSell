import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background blur orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -right-20 w-[28rem] h-[28rem] bg-blue-400/30 dark:bg-blue-800/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-64 -left-20 w-[24rem] h-[24rem] bg-cyan-300/40 dark:bg-cyan-900/20 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-24 pb-20 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          <span className="block text-gray-900 dark:text-white">
            Sell Unused Software Licenses,
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 dark:from-blue-400 dark:to-cyan-300 animate-float pb-2">
            Get Paid Instantly 💸
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
        >
          With SoftSell, turn your idle software into working capital in minutes.
          Safe, transparent, and fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-semibold transition shadow-md hover:shadow-xl"
            aria-label="Get a Quote"
          >
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-blue-600 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-cyan-300 dark:hover:bg-gray-700 font-medium transition shadow-md hover:shadow-xl border"
            aria-label="Learn More"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400"
        >
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Secure Transactions</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Instant Payouts</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Best Market Value</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
