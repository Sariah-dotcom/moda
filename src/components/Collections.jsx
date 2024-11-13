import React from "react";
import Card from "./Card";

export default function Collections() {
  return (
    <div className="flex flex-col gap-[5rem]">
      <div className="flex flex-col items-center font-dm-sans text-brown text-2xl lg:text-5xl">
        <span className="flex items-center gap-1">
          Level up <img src="/images/up-arrow.png" alt="up arrow" /> your style
        </span>
        <span className="flex items-center gap-1">
          with high-quality{" "}
          <img src="/images/bag-in-shape.png" alt="up arrow" />,
        </span>
        <span className="flex items-center gap-1">sustainably made purses</span>
        <span className="flex items-center gap-1">
          <img src="/images/purse-in-shape.png" alt="up arrow" />
          and handbags.
        </span>
      </div>

      <div id="collections">
        <h2 className="text-2xl text-center text-brown font-semibold mb-[3rem] lg:text-4xl">
          Fall Collection 2024
        </h2>

        <div className="flex flex-wrap justify-center gap-2">
          <Card productName="Vera Bag" collectionImg="/images/bag-1.jpg" />

          <Card productName="Hayley Bag" collectionImg="/images/bag-2.jpg" />

          <Card productName="Vera Bag" collectionImg="/images/bag-3.jpg" />

          <Card productName="Vera Bag" collectionImg="/images/bag-1.jpg" />
        </div>
      </div>
    </div>
  );
}
