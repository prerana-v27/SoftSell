import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const licenseTypes = [
  'Enterprise Software',
  'Development Tools',
  'Cloud Services',
  'Security Software',
  'Database Licenses',
  'Other',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
      isValid = false;
    }

    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          'your_service_id',       // from EmailJS dashboard
          'your_template_id',      // from EmailJS dashboard
          formData,                // matches template variables
          'your_user_id'           // your public key
        )
        .then(() => {
          console.log('Email sent successfully!');
          window.alert('✅ Your message has been sent!');
          setSubmitted(true);
          setFormData({
            name: '',
            email: '',
            company: '',
            licenseType: '',
            message: '',
          });
          setTimeout(() => setSubmitted(false), 4000);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  };

  return (
    <section id="contact" className="section section-gradient py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Ready to sell your licenses? Let's talk!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl backdrop-blur-xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 shadow-xl p-8 space-y-6"
          >
            {[
              { label: 'Name', id: 'name', type: 'text', placeholder: 'John Doe' },
              { label: 'Email', id: 'email', type: 'email', placeholder: 'john@example.com' },
              { label: 'Company', id: 'company', type: 'text', placeholder: 'Your Company' },
            ].map(({ label, id, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={`w-full rounded-lg px-4 py-2 bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white border ${
                    errors[id] ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                  required
                />
                {errors[id] && <p className="text-sm text-red-500 mt-1">{errors[id]}</p>}
              </div>
            ))}

            <div>
              <label htmlFor="licenseType" className="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                License Type
              </label>
              <select
                id="licenseType"
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className={`w-full rounded-lg px-4 py-2 bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white border ${
                  errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } focus:ring-2 focus:ring-blue-500 outline-none`}
                required
              >
                <option value="">Select a license type</option>
                {licenseTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.licenseType && <p className="text-sm text-red-500 mt-1">{errors.licenseType}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your licenses..."
                className={`w-full rounded-lg px-4 py-2 bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white border ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                } focus:ring-2 focus:ring-blue-500 outline-none`}
                required
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <div>
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send className="ml-2 w-5 h-5" />
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-600 text-center"
                >
                  ✅ Your message has been sent!
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
