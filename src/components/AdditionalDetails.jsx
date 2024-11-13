import React from "react";

export default function AdditionalDetails() {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full h-[20rem] rounded-[1rem]">
        <img
          className="w-full h-[20rem] object-cover rounded-[1rem]"
          src="/images/model-2.jpg"
          alt="model with purse"
        />
        <div className="absolute font-dm-sans bottom-3 left-3 text-white text-2xl z-10 flex flex-col gap-2">
          <h2 className="font-semibold">Subscribe to our mailing list</h2>
          <p className="text-sm text-white">
            Be the first to know when a collections drops and get access to
            exlusive deals
          </p>
          <div className="flex justify-between border-2 rounded-full p-[0.1rem]">
            <input
              className="w-[70%] px-2 text-xs text-white rounded-full"
              type="text"
              placeholder="email"
            />
            <button className="bg-white font-semibold text-brown text-sm px-4 rounded-full py-3">
              Subscribe
            </button>
          </div>
        </div>
        <div className="absolute inset-0 bg-brown opacity-40 rounded-[1rem]"></div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative w-full h-[10rem] rounded-[1rem]">
          <img
            className="w-full h-[10rem] object-cover rounded-[1rem]"
            src="/images/large-bag.jpg"
            alt="model with purse"
          />
          <div className="absolute inset-0 bg-brown opacity-40 rounded-[1rem]"></div>
          <div className="absolute font-dm-sans bottom-3 left-3 text-white font-semibold text-2xl z-10">
            Accessorize your purse <br />
            <button className="bg-white text-brown text-sm px-4 rounded-full py-1">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative w-full h-[10rem] rounded-[1rem]">
          <img
            className="w-full h-[10rem] object-cover rounded-[1rem]"
            src="/images/leather-closeup.jpg"
            alt="model with purse"
          />

          <div className="absolute inset-0 bg-brown opacity-40 rounded-[1rem]"></div>
          <div className="absolute font-dm-sans bottom-3 left-3 text-white font-semibold text-2xl z-10">
            Care instructions <br />
            <button className="bg-white text-brown text-sm px-4 rounded-full py-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
