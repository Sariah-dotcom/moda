import React, { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible((prev) => !prev);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-20 fixed p-5 text-white flex items-center justify-between w-full transition-colors duration-300 ${
        isScrolled ? "bg-brown" : "bg-transparent"
      }`}
    >
      <h2 className="font-dm-sans text-2xl">moda.</h2>

      {/* Menu Icon */}
      <div onClick={toggleMenu} className="text-2xl cursor-pointer z-20">
        {menuVisible ? <IoClose /> : <CiMenuFries />}
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-brown flex flex-col items-center justify-center transition-transform duration-500 ${
          menuVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="text-3xl flex flex-col gap-10 font-dm-sans text-white">
          <li>Collections</li>
          <li>Accessories</li>
          <li>Bag Care</li>
        </ul>
      </div>
    </nav>
  );
}
