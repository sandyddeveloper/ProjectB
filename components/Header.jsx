import React from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Article", href: "#" },
  { name: "Pages", href: "#" },
  { name: "Faq", href: "#" },
];

const Header = () => {
  return (
    <section className="bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img
            src="https://discordbanners.vercel.app/static/img/logo.svg"
            alt="logo"
            className="h-10"
          />
        </div>
        <nav className="flex gap-x-9 items-center">
          <ul className="flex gap-x-5 font-semibold">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.href}
                  className="px-4 py-2 hover:text-blue-500 transition"
                >
                  {link.name}
                </a>
                <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
                  /
                </span>
              </li>
            ))}
          </ul>

          <button className="border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </nav>
      </header>
    </section>
  );
};

export default Header;
