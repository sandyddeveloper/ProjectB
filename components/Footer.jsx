import React from "react";
import { Twitter, Youtube, Instagram, Facebook, Send, Heart } from "lucide-react";

const Footer = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <footer className="container mx-auto px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center lg:text-left">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Product</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {["Landing Page", "Features", "Documentation", "Referral Program", "Pricing"].map((item) => (
              <li key={item}>
                <a href="/" className="hover:text-primary transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {["Documentation", "Design", "Themes", "Illustrations", "UI Kit"].map((item) => (
              <li key={item}>
                <a href="/" className="hover:text-primary transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {["About", "Terms", "Privacy Policy", "Careers"].map((item) => (
              <li key={item}>
                <a href="/" className="hover:text-primary transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">More</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {["Documentation", "License", "Changelog"].map((item) => (
              <li key={item}>
                <a href="/" className="hover:text-primary transition">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <img src="https://discordbanners.vercel.app/static/img/logo.svg" alt="Logo" className="w-20" />
          <p className="mt-3 text-sm text-center lg:text-left">
            Build a modern and creative website with Crealand
          </p>

          <ul className="flex mt-5 space-x-4">
            {[Twitter, Youtube, Instagram, Facebook, Send].map((Icon, index) => (
              <li key={index}>
                <a href="/" className="p-2 rounded-full hover:bg-primary hover:text-white transition">
                  <Icon className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="border-t border-gray-300 dark:border-gray-700 py-6 text-center text-sm px-4">
  <p className="text-gray-700 dark:text-gray-300">
    By using this site, you agree to the 
    <a href="/terms" className="text-primary font-semibold hover:underline mx-1">Terms of Service</a> 
    and 
    <a href="/privacy" className="text-primary font-semibold hover:underline mx-1">Privacy Policy</a> 
    of Dealsmagnet. This website is currently in the development stage; users should navigate with caution.
  </p>
  
  <div className="flex flex-col items-center mt-3">
    <div className="flex items-center space-x-2">
      <Heart className="w-5 h-5 text-red-500" />
      <p>© {new Date().getFullYear()} | All Rights Reserved.</p>
    </div>
    <p className="text-xs text-gray-500 mt-1">
      Designed & Developed by <span className="font-bold">Santhosh Raj</span>.
    </p>
    <p className="text-xs text-gray-500 mt-1">
      This will be changed shortly.
    </p>
  </div>
</div>

    </section>
  );
};

export default Footer;
