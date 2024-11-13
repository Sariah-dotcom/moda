import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex flex-col gap-10 bg-brown text-white justify-between px-3 pt-10 rounded-[1rem]">
      <h2 className="text-4xl font-bold">moda.</h2>
      <div>
        <h3 className="font-bold mb-3">Collections</h3>
        <ul className="text-xs font-inter">
          <li>
            <a href="">Fall '24</a>
          </li>
          <li>
            <a href="">Summer '24</a>
          </li>
          <li>
            <a href="">Spring '24</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-3">Policies</h3>
        <ul className="text-xs font-inter">
          <li>
            <a href="">Shipping Policy</a>
          </li>
          <li>
            <a href="">Refund Policy</a>
          </li>
        </ul>
      </div>

      <div className="pb-1">
        <hr className="border" />
        <div className="flex justify-between py-2">
          <div className="flex gap-2 items-center">
            <FaFacebook />
            <RiInstagramFill />
          </div>
          <p className="text-white text-xs">Copyright © {year}</p>
        </div>
      </div>
    </div>
  );
}
