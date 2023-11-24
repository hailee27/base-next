import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Banner() {
  const router = useRouter();

  return (
    <div className=" w-full min-h-screen lg:h-[850px] h-[750px] lg:px-[100px] pc:px-0 relative ">
      <div className="absolute flex-col font-lexendDeca z-10 text-[#870608] w-full flex items-center  lg:w-[80%] left-[50%] -translate-x-[50%]  h-full">
        <div className="w-full h-full flex items-center justify-between flex-col lg:space-y-[40px] px-[24px]">
          <div
            data-aos="fade-up"
            className=" font-normal lg:text-[38px] flex flex-col items-center  text-center lg:pt-[120px] pt-[180px]"
          >
            <span className="lg:text-[28px] text-[20px]">Trân trọng kính mời</span>
            <span className="text-[30px]  pt-[30px]"> {router?.query?.khach} </span>
          </div>

          <div
            // data-aos="fade-down"
            // data-aos-offset="0"
            className="flex flex-col items-center justify-between  flex-1 lg:pb-[40px] pb-[100px]"
          >
            <span className="lg:text-[28px] lg:w-[500px] text-center" data-aos="fade-up">
              ĐẾN DỰ BUỔI TIỆC CHUNG VUI VỚI GIA ĐÌNH CHÚNG TÔI TẠI
            </span>
            {/* <span className="text-[24px]">ĐẾN DỰ BUỔI TIỆC CHUNG VUI VỚI GIA ĐÌNH CHÚNG TÔI TẠI</span> */}
            <Link
              href={
                router.pathname === '/nha-trai'
                  ? 'https://maps.app.goo.gl/rNx1QBAkiQAADiFo6'
                  : 'https://maps.app.goo.gl/dmURqpWCRXNRzTuv8'
              }
            >
              <div className="lg:text-[44px] text-[28px]  text-center font-medium " data-aos="fade-up">
                {router.pathname === '/nha-trai' ? 'TƯ GIA NHÀ TRAI' : 'TƯ GIA NHÀ GÁI'}
              </div>
              <div
                className="lg:text-[24px] text-[14px] underline underline-offset-[7px] opacity-80 text-center"
                data-aos="fade-up"
              >
                {router.pathname === '/nha-trai'
                  ? '47 Ngõ 9A, thôn Đoài, Nam Hồng, Đông Anh, Hà Nội'
                  : '14 Ngõ 22, Mai Châu, Đại Mạch, Đông Anh, Hà Nội'}
              </div>
            </Link>
            <div className=" relative lg:w-[150px] lg:h-[80px] w-[120px] h-[60px]" data-aos="fade-up">
              <Image alt="" src="/images/flower-decor-t2@3x.png" fill={true} />
            </div>
            <div className="text-center lg:text-[24px] text-[16px]" data-aos="fade-up">
              VÀO LÚC 17 GIỜ 30, THỨ SÁU
              <div className="lg:text-[60px] text-[40px]" data-aos="fade-up">
                {' '}
                01 . 12 . 2023
              </div>
              <span className="xl:text-[32px] text-[12px]" data-aos="fade-up">
                (NHÂM NGÀY 19 THÁNG 10 NĂM QUÝ MÃO)
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 right-0">
            <div className="relative lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]">
              <Image alt="cloud" className="scale-x-[-1]" fill={true} src="/images/shape.png" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="relative lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]">
              <Image alt="cloud" fill={true} src="/images/shape.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:-top-4 -top-2 z-30 lg:left-[180px] -left-5" data-aos="zoom-out">
        <div className={styles.cloud}>
          <Image alt="cloud" className="scale-x-[-1]" fill={true} src="/images/cloud.png" />
        </div>
      </div>
      <div className="absolute lg:-top-4 -top-2 z-30 lg:right-[180px] -right-5" data-aos="zoom-out">
        <div className={styles.cloud}>
          <Image alt="cloud" fill={true} src="/images/cloud.png" />
        </div>
      </div>
      <div className="w-full min-h-screen relative overflow-auto overflow-x-hidden">
        <div className="absolute -top-2 lg:left-[200px] z-30 left-12" data-aos="fade-down">
          <div className={styles.lantern}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
        <div className="absolute -top-2 lg:left-[80px] left-0 z-20" data-aos="fade-down">
          <div className={styles.lanternSmall}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
        {/* phải */}
        <div className="absolute -top-2 lg:right-[200px] right-12 z-20" data-aos="fade-down">
          <div className={styles.lantern}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
        <div className="absolute -top-2 lg:right-[80px] right-0 z-10" data-aos="fade-down">
          <div className={styles.lanternSmall}>
            <Image alt="alo" fill={true} src="/images/lantern.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
