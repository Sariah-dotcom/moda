import React from "react";

export default function Card(props) {
  return (
    <div className="h-[15rem] w-[48%] rounded-[1rem] overflow-hidden relative">
      <img
        className="w-full h-full object-cover"
        src={props.collectionImg}
        alt="product image"
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 bg-brown opacity-40"></div>

      <div className="absolute font-dm-sans bottom-3 left-3 text-white font-semibold text-2xl z-10">
        {props.productName} <br />
        <button className="bg-white text-brown text-sm px-4 rounded-full py-1">
          View
        </button>
      </div>
    </div>
  );
}
