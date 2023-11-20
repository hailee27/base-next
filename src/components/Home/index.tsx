/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

import TemplateCard from '../TemplateCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Invitation from './Invitation';
import Banner from '../Banner';
import Image from 'next/image';

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1300
    });
  });
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      {show && (
        <div
          className="fixed  z-50 w-screen h-screen bg-black bg-opacity-20 flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
        >
          <div className="relative w-3/4 max-w-[400px] h-3/4">
            <Image alt="" fill={true} src="/images/qrTrai.jpg" />
          </div>
        </div>
      )}
      <div className="fixed z-40 bottom-6 right-6 cursor-pointer" onClick={() => setShow(!show)}>
        <div className="relative w-[85px] h-[99px]">
          <div className="absolute z-50 -top-[62px]">
            <svg
              data-gjs-type="svg"
              width="86"
              height="97"
              viewBox="0 0 86 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="iayocu"
            >
              <path
                data-gjs-type="svg-in"
                d="M85 52.445V81.3185C85 82.3228 84.526 83.2357 83.7675 83.893C83.3693 84.2399 82.8763 84.532 82.3454 84.7146L81.9472 84.8424L45.5788 96.1078C43.9291 96.6191 42.1278 96.6191 40.4781 96.1078L4.10971 84.8607L3.6167 84.7146C3.10474 84.532 2.6307 84.2399 2.23251 83.9112C1.47404 83.2357 1 82.3228 1 81.3185V52.445C1 50.1262 2.95305 48.2456 5.36117 48.2456H43H80.6388C83.047 48.2456 85 50.1262 85 52.445Z"
                fill="#A5072D"
                stroke="#231F20"
                stroke-miterlimit="10"
                id="i91x4m"
              ></path>
            </svg>
          </div>
          <Image alt="" fill={true} src="/images/front.png" />
        </div>
      </div>
      <section className={styles.header}>
        <article className="lg:grid  hidden grid-rows-2   grid-flow-col gap-4 " data-aos="zoom-in-up">
          <img src="/images/anh1.jpg" alt="" />
          <img src="/images/anh7.jpg" className="row-span-1 col-span-3 " alt="" />
          <img src="/images/anh2.jpg" alt="" />
          <img src="/images/anh5.jpg" alt="" />
          <img src="/images/anh3.jpg" className="row-span-2 col-span-2 " alt="" />
          <img src="/images/anh6.jpg" className="row-span-1 col-span-3 " alt="" />
          <img src="/images/anh4.jpg" alt="" />
          <img src="/images/anh8.jpg" alt="" />
          <img src="/images/anh9.jpg" alt="" />
        </article>
        <article className="md:hidden grid grid-rows-3   grid-flow-col gap-4 " data-aos="zoom-in-up">
          <img src="/images/anh7.jpg" className="col-span-4  " alt="" />
          <img src="/images/anh1.jpg" alt="" />
          <img src="/images/anh4.jpg" alt="" />
          <img src="/images/anh5.jpg" alt="" />
          <img src="/images/anh6.jpg" className="col-span-4  " alt="" />
          <img src="/images/anh3.jpg" className=" " alt="" />

          <img src="/images/anh8.jpg" alt="" />
          <img src="/images/anh9.jpg" alt="" />
          <img src="/images/anh2.jpg" alt="" />
        </article>

        <div className="flex items-center justify-center flex-col space-y-4 text-[#870608] md:pt-0 pt-[100px]">
          <span
            className="md:text-[32px] text-[24px] text-center tracking-widest"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Lê Văn Hải & Vương Ngọc Ánh
          </span>
          <span className="tmd:text-[48px] text-[32px] text-center" data-aos="fade-up" data-aos-delay="1000">
            01 . 12 . 2022
          </span>
        </div>
      </section>
      {/* <section className={styles.invitation}>
        <div className=" md:p-[90px_100px_100px] p-[40px_20px_10px]">
          <TemplateCard>
            <Invitation />
          </TemplateCard>
        </div>
      </section> */}
      <section className={styles.invitation}>
        <Banner />
      </section>
      <section className="w-full flex items-center justify-center mt-[150px]">
        <div className="md:w-[80%] w-full h-full">
          <TemplateCard>
            <Invitation />
          </TemplateCard>
        </div>
        {/* <Invitation /> */}
      </section>
    </div>
  );
}

export default Home;
