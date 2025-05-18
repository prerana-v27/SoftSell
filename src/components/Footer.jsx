import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          &copy; {currentYear} SoftSell. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

