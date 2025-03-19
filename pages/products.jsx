import React from "react";
import Image from "next/image";
import { ShoppingCart,Tag,RefreshCw  } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-10 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-lg">
        <div className="relative flex justify-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s"
            alt="Product Name"
            width={450}
            height={450}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Amazing Product Name
          </h1>
          <p className="text-gray-700">
            Experience the best with this top-quality product, designed for
            ultimate performance and durability.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-xl font-semibold text-blue-600">Special Price: ₹999</p>
            <p className="text-sm text-gray-500">
              MRP: <span className="line-through">₹1,999</span>
            </p>
            <p className="text-sm text-red-600">You Save: 50% OFF</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md flex items-center gap-2 hover:bg-blue-700 transition">
  <ShoppingCart className="w-5 h-5" /> Get This Deal
</button>
            <button className="w-full sm:w-auto bg-gray-800 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-gray-900 transition">
              📢 Join Telegram
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 border border-gray-300 rounded-lg bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-900">💰 Pricing Breakdown</h2>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>✅ Base Price: ₹1,500</li>
          <li>✅ Discount Applied: ₹500</li>
          <li>✅ Final Price: ₹999</li>
        </ul>
      </div>

      <div className="mt-10">
  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
  <RefreshCw className="w-6 h-6 text-blue-600" /> Related Products
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[1, 2, 3, 4].map((item) => (
      <div
        key={item}
        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
      >
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QaRqKWxfrGdQ9r5U5mWg-RWItNxzmphX-Q&s"
        //   src={`/product${item}.jpg`}
          alt={`Product ${item}`}
          width={200}
          height={200}
          className="rounded-md mx-auto"
        />
        <p className="mt-3 text-sm font-medium text-gray-900 flex items-center gap-2">
          <Tag className="w-4 h-4 text-gray-500" /> Product {item}
        </p>
        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          <ShoppingCart className="w-5 h-5" /> View Deal
        </button>
      </div>
    ))}
  </div>
</div>
    </div>
    <Footer />
    </>
  );
};

export default ProductDetail;
