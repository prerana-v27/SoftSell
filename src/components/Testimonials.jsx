import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Solutions',
    content:
      'SoftSell made it incredibly easy to monetize our unused software licenses. The process was smooth, and we received payment within 24 hours. Highly recommended!',
    rating: 5,
    delay: 0,
  },
  {
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'Global Innovations Inc.',
    content:
      'As a growing company, we needed a reliable way to manage our software assets. SoftSell provided an excellent solution with their transparent valuation process and professional support team.',
    rating: 5,
    delay: 0.2,
  },
];

const Testimonials = () => {
  if (!testimonials.length) {
    // Fallback UI if no testimonials are available
    return (
      <section
        id="testimonials"
        className="section section-white text-center py-16"
        aria-live="polite"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300">
          No testimonials available at the moment. Please check back later.
        </p>
      </section>
    );
  }

  return (
    <section
      id="testimonials"
      className="section section-white py-16"
      aria-label="Customer testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-extrabold gradient-text mb-4"
            tabIndex={0}
          >
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: testimonial.delay }}
              className="testimonial-card flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
              tabIndex={0}
            >
              <Quote
                className="w-10 h-10 text-primary-500/20 dark:text-primary-400/20 mb-4"
                aria-hidden="true"
              />
              <div className="flex items-center space-x-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'fill-current text-primary-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
