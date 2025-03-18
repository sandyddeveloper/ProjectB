import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 9999,
    discount: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 14999,
    discount: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },
  {
    id: 3,
    title: "Gaming Mouse",
    price: 5999,
    discount: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 9999,
    discount: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },{
    id: 5,
    title: "Wireless Headphones",
    price: 9999,
    discount: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },{
    id: 6,
    title: "Wireless Headphones",
    price: 9999,
    discount: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },{
    id: 7,
    title: "Wireless Headphones",
    price: 9999,
    discount: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },{
    id: 8,
    title: "Wireless Headphones",
    price: 9999,
    discount: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },{
    id: 9,
    title: "Wireless Headphones",
    price: 9999,
    discount: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s",
    logo: "https://discordbanners.vercel.app/static/img/logo.svg",
  },
];

const ProductCard = () => {
  return (
    <section className="container mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🔥 Best Deals for You!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-xl overflow-hidden transition-all transform hover:-translate-y-2 hover:shadow-2xl p-5 backdrop-blur-lg bg-opacity-70 border border-gray-200"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <img
                src={product.logo}
                alt="Brand Logo"
                className="absolute top-3 left-3 w-10 h-10 bg-white rounded-full p-1 shadow-md"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              {product.title}
            </h3>

            {/* Price Calculation */}
            <p className="text-gray-600 mt-2 flex items-center gap-2">
              <span className="text-blue-500 font-bold text-xl">
                ₹
                {(
                  product.price -
                  (product.price * product.discount) / 100
                ).toFixed(2)}
              </span>
              <span className="line-through text-gray-400 text-lg">
                ₹{product.price.toFixed(2)}
              </span>
              <span className="ml-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                {product.discount}% Off
              </span>
            </p>

            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 mt-5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer">
              <ShoppingCart size={20} />
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
