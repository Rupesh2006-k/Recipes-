import React from "react";

const recipesData = [
  {
    id: 1,
    name: "Delicious Burger",
    price: "$8",
    rating: 4,
    img: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Fresh Salad",
    price: "$6",
    rating: 5,
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Pizza Slice",
    price: "$10",
    rating: 5,
    img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Fruit Bowl",
    price: "$5",
    rating: 4,
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Healthy vs Junk",
    price: "$12",
    rating: 3,
    img: "https://media.istockphoto.com/id/1194555363/photo/soft-ice-cream-in-flavor-vanilla-chocolate-and-strawberry-delicous-creamy-refreshing-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=daAfxOoNepi3QLZGRH7vAuMexHT9HT8L3-qXavCc_8U=",
  },
];

const Recipes = () => {
  return (
    <div className="flex flex-wrap justify-center min-h-screen gap-6 p-6 bg-gray-100">
      {recipesData.map((recipe) => (
        <div
          key={recipe.id}
          className="w-56 overflow-hidden transition-transform duration-200 bg-white shadow-lg h-70 rounded-xl hover:scale-105"
        >
          <img
            src={recipe.img}
            alt={recipe.name}
            className="object-cover w-full h-36"
          />
          <div className="p-4">
            <h3 className="mb-1 text-lg font-semibold">{recipe.name}</h3>
            <p className="mb-2 text-gray-600">Price: {recipe.price}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(recipe.rating) + "☆".repeat(5 - recipe.rating)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
