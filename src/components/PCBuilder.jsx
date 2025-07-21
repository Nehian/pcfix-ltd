import React, { useState } from 'react';

const components = {
  cpu: [
    { name: 'Intel i5-12400F', price: 185 },
    { name: 'AMD Ryzen 5 5600', price: 165 }
  ],
  gpu: [
    { name: 'NVIDIA RTX 3060', price: 299 },
    { name: 'AMD RX 6600', price: 259 }
  ],
  ram: [
    { name: '16GB DDR4', price: 60 },
    { name: '32GB DDR4', price: 110 }
  ]
};

function PCBuilder() {
  const [selection, setSelection] = useState({ cpu: '', gpu: '', ram: '' });

  const handleChange = (type, value) => {
    setSelection({ ...selection, [type]: value });
  };

  const getTotal = () => {
    const partPrices = Object.entries(selection).map(([type, name]) => {
      const item = components[type].find(p => p.name === name);
      return item ? item.price : 0;
    });
    const total = partPrices.reduce((a, b) => a + b, 0);
    return total + 100; // fixed labour
  };

  return (
    <div className="bg-white p-6 rounded shadow mt-10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Build Your Desktop</h2>

      {Object.keys(components).map(type => (
        <div key={type} className="mb-4">
          <label className="block font-semibold capitalize mb-1">{type}</label>
          <select
            className="w-full border rounded p-2"
            onChange={(e) => handleChange(type, e.target.value)}
            value={selection[type]}
          >
            <option value="">Select a {type}</option>
            {components[type].map(option => (
              <option key={option.name} value={option.name}>
                {option.name} (£{option.price})
              </option>
            ))}
          </select>
        </div>
      ))}

      <p className="mt-4 text-lg font-medium">
        Total Estimated Price: £{getTotal()}
      </p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Book Your Build
      </button>
    </div>
  );
}

export default PCBuilder;
