import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Banner() {
  const router = useRouter();
  console.log(router.query.name);
  return (
    <div className=" w-full min-h-screen h-full md:px-[100px] pc:px-0 relative ">
      <div className="absolute flex-col font-lexendDeca z-10 text-[#870608] w-full flex items-center bg-[#ffe3e3] md:w-[80%] left-[50%] -translate-x-[50%]  h-full">
        <div className="w-full h-full flex items-center justify-between flex-col space-y-[80px]">
          <div className=" font-normal md:text-[38px] flex flex-col items-center  text-center md:pt-[120px] pt-[100px]">
            <span className="md:text-[28px] text-[24px]">Trân trọng kính mời</span>
            <span className="text-[30px] underline underline-offset-8 decoration-1 "> {router.query.name} </span>
          </div>

          <div
            // data-aos="fade-down"
            // data-aos-offset="0"
            className="flex flex-col items-center justify-between  flex-1 pb-[60px]"
          >
            <span className="md:text-[28px] md:w-[500px] text-center">
              ĐẾN DỰ BUỔI TIỆC CHUNG VUI VỚI GIA ĐÌNH CHÚNG TÔI TẠI
            </span>
            {/* <span className="text-[24px]">ĐẾN DỰ BUỔI TIỆC CHUNG VUI VỚI GIA ĐÌNH CHÚNG TÔI TẠI</span> */}
            <Link
              href={
                'https://www.google.com/maps/place/14+Ng.+22,+%C4%90%E1%BA%A1i+M%E1%BA%A1ch,+%C4%90%C3%B4ng+Anh,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.1176597,105.7555245,17z/data=!3m1!4b1!4m6!3m5!1s0x3134ff8cd6272545:0xba5ce95e4f5ed942!8m2!3d21.1176547!4d105.7580994!16s%2Fg%2F11j95ntc18?hl=vi&entry=ttu'
              }
            >
              <div className="md:text-[44px] text-[32px]  text-center font-medium ">TƯ GIA NHÀ GÁI</div>
              <span className="md:text-[24px] text-[16px] underline underline-offset-[7px] opacity-80">
                {' '}
                14 Ngõ 22, Mai Châu, Đại Mạch, Đông Anh, Hà Nội
              </span>
            </Link>
            <div className="text-center w-full flex items-center justify-center">
              <Image alt="" src="/images/flower-decor-t2@3x.png" width={150} height={150} />
            </div>
            <div className="text-center text-[24px]">
              VÀO LÚC 17 GIỜ 30, THỨ SÁU
              <div className="md:text-[60px] text-[40px]"> 01 . 12 . 2022</div>
              <span className="xl:text-[32px] text-[16px]">(NHÂM NGÀY 19 THÁNG 10 NĂM QUÝ MÃO)</span>
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="relative md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
              <Image alt="cloud" className="scale-x-[-1]" fill={true} src="/images/shape.png" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="relative md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
              <Image alt="cloud" fill={true} src="/images/shape.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:-top-4 -top-2 z-30 md:left-[180px] -left-5" data-aos="zoom-out">
        <div className={styles.cloud}>
          <Image alt="cloud" className="scale-x-[-1]" fill={true} src="/images/cloud.png" />
        </div>
      </div>
      <div className="absolute md:-top-4 -top-2 z-30 md:right-[180px] -right-5" data-aos="zoom-out">
        <div className={styles.cloud}>
          <Image alt="cloud" fill={true} src="/images/cloud.png" />
        </div>
      </div>
      <div className="w-full min-h-screen relative overflow-auto overflow-x-hidden">
        <div className="absolute -top-2 md:left-[200px] z-30 left-12" data-aos="fade-down">
          <div className={styles.lantern}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
        <div className="absolute -top-2 md:left-[80px] left-0 z-20" data-aos="fade-down">
          <div className={styles.lanternSmall}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
        {/* phải */}
        <div className="absolute -top-2 md:right-[200px] right-12 z-20" data-aos="fade-down">
          <div className={styles.lantern}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
        <div className="absolute -top-2 md:right-[80px] right-0 z-10" data-aos="fade-down">
          <div className={styles.lanternSmall}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
