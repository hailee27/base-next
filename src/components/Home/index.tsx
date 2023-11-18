import React, { useEffect } from 'react';
import styles from './index.module.scss';
import Header from './Header';
import TemplateCard from '../TemplateCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Invitation from './Invitation';
import Banner from '../Banner';
function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1300
    });
  });

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <Header />
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
      {/* <section className={styles.location}> */}
      <div className="md:w-[80%] w-full h-full">
        <TemplateCard>
          <Invitation />
        </TemplateCard>
      </div>
      {/* <Invitation /> */}
      {/* </section> */}
    </div>
  );
}

export default Home;
