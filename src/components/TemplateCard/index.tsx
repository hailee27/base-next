import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

function TemplateCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className={styles.topLeft}>
        <div className="relative lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] ">
          <Image alt="icon" fill={true} src="/images/shape.png" />
        </div>
      </div>
      <div className={styles.topRight}>
        <div className="relative lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] ">
          <Image alt="icon" src="/images/shape.png" fill={true} />
        </div>
      </div>
      <div className={styles.bottomLeft}>
        <div className="relative lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] ">
          <Image alt="icon" src="/images/shape.png" fill={true} />
        </div>
      </div>
      <div className={styles.bottomRight}>
        <div className="relative lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] ">
          <Image alt="icon" src="/images/shape.png" fill={true} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default TemplateCard;
