import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to PCFix Ltd</h1>
        <p className="text-lg text-gray-700">This is your all-in-one IT repair and custom PC builder platform.</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
