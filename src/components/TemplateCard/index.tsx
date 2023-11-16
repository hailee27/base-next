import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';

function TemplateCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Image className={styles.topLeft} alt="icon" src="/images/shape.png" width={166} height={159} />
      <Image className={styles.topRight} alt="icon" src="/images/shape.png" width={166} height={159} />
      <Image className={styles.bottomLeft} alt="icon" src="/images/shape.png" width={166} height={159} />
      <Image className={styles.bottomRight} alt="icon" src="/images/shape.png" width={166} height={159} />
      {/* <div className={styles.upperLine}></div>
      <div className={styles.leftLine}></div>
      <div className={styles.rightLine}></div>
      <div className={styles.bottomLine}></div> */}
      {children}
    </div>
  );
}

export default TemplateCard;
