import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className="w-full h-full  ">
      <div className="relative h-full">
        <Image alt="" className="object-cover bg-[#ffe3e3]" fill={true} src="/images/background.png" />
        <div className="flex items-center justify-center text-[#870608] w-full h-full flex-col absolute">
          <div
            className="lg:font-light font-normal flex items-center flex-col lg:flex-row lg:space-x-[24px] pc:space-y-3"
            data-aos="fade-up"
          >
            <p className="lg:text-[68px] text-[24px] tracking-[5px]">NGỌC ÁNH</p>
            <p className="lg:text-[48px] text-[34px]">❤</p>
            <p className="lg:text-[68px] text-[24px]  tracking-[5px]">LÊ HẢI</p>
          </div>
          <p
            className="lg:text-[56px] text-[24px] lg:font-light font-normal pt-[40px]  tracking-[5px]"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            01 . 12 . 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
