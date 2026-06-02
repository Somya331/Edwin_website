import React, { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {
    window.location.replace('https://edwinincorp.zohodesk.in/portal/en/home');
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">FAQ</h1>
      <p>Redirecting to FAQ support portal...</p>
    </div>
  );
};

export default FAQ;
