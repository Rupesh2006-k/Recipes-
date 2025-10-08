/** @format */

import React from "react";

// Sample JSON data
const chefsData = [
  {
    id: 1,
    name: "John Doe",
    specialty: "Italian Cuisine Master",
    salary: "$90k - $120k",
    image: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Jane Smith",
    specialty: "Pastry Chef",
    salary: "$70k - $90k",
    image: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "Mike Johnson",
    specialty: "Sushi Master",
    salary: "$80k - $100k",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&auto=format&fit=crop&q=60",
  },
];


const Chef = () => {
  return (
    <div className="flex flex-wrap justify-center min-h-screen gap-6 p-6 bg-green-50">
      {chefsData.map((chef) => (
        <div
          key={chef.id}
          className="overflow-hidden transition-shadow duration-300 bg-white shadow-md w-70 h-95 rounded-xl hover:shadow-xl"
        >
          <img
            className="object-cover w-full h-48"
            src={chef.image}
            alt={chef.name}
          />
          <div className="p-6">
            <h2 className="mb-2 text-xl font-bold">{chef.name}</h2>
            <p className="mb-2 text-gray-700">Specialty: {chef.specialty}</p>
            <p className="mb-4 text-gray-700">Salary: {chef.salary}</p>
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Contact
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chef;
