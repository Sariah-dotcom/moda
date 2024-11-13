import React from 'react';

export default function AdditionalDetails() {
  return (
    <div className='flex flex-col gap-3'>
      <div className="relative w-full h-[20rem] rounded-[1rem]">
        <img className="w-full h-[20rem] object-cover rounded-[1rem]" src="/images/model-2.jpg" alt="model with purse" />
        
        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-brown opacity-40 rounded-[1rem]"></div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className="relative w-full h-[10rem] rounded-[1rem]">
            <img className="w-full h-[10rem] object-cover rounded-[1rem]" src="/images/large-bag.jpg" alt="model with purse" />
            
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-brown opacity-40 rounded-[1rem]"></div>
            <div className="absolute font-dm-sans bottom-3 left-3 text-white font-semibold text-2xl z-10">
                Accessorize your purse <br />
                <button className='bg-white text-brown text-sm px-4 rounded-full py-1'>Learn More</button>
            </div>
        </div>

        <div className="relative w-full h-[10rem] rounded-[1rem]">
            <img className="w-full h-[10rem] object-cover rounded-[1rem]" src="/images/leather-closeup.jpg" alt="model with purse" />
            
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-brown opacity-40 rounded-[1rem]"></div>
            <div className="absolute font-dm-sans bottom-3 left-3 text-white font-semibold text-2xl z-10">
                How to take care of your bag
                <button className='bg-white text-brown text-sm px-4 rounded-full py-1'>Learn More</button>
            </div>
        </div>
      </div>
    </div>
  );
}
