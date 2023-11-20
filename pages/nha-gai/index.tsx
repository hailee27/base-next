import Home from '@/src/components/Home';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';

function index() {
  return (
    <>
      <Head>
        <title>Đám cưới Hải & Ánh</title>
        <meta
          data-n-head="ssr"
          data-hid="og:image"
          property="og:image"
          content="https://image.namtay.vn/fit/1200/images/wedsite/2QHhwLokHBIM8TjRuPGap9kZoBFgE6xtHhsPEnvJ.jpeg"
        ></meta>
      </Head>
      <Home />
      <ToastContainer />
    </>
  );
}

export default index;
