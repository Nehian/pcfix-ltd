import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="text-center text-sm">
        <p>© {new Date().getFullYear()} PCFix Ltd. All rights reserved.</p>
        <p>Phone: 01279 412 811 | Email: support@pcfixltd.co.uk</p>
        <p>123 Tech Street, Harlow, Essex CM20</p>
      </div>
    </footer>
  );
}

export default Footer;
