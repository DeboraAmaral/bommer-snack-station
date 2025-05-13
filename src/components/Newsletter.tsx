
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to your API
      console.log('Newsletter subscription for:', email);
      setEmail('');
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-ecolive-light-green bg-opacity-10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-ecolive-text-light mb-8">
            Get updates on new products, special offers, and seasonal tips for your organic lifestyle
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ecolive-light-green focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-ecolive-light-green text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              Subscribe
            </button>
          </form>
          
          {submitted && (
            <div className="mt-4 text-ecolive-light-green">
              Thanks for subscribing!
            </div>
          )}
          
          <p className="text-xs text-ecolive-text-light mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
