import React from 'react'
import Layout from './../../components/Layout';
import Solution from './solution';
import TenYear from './TenYear';
import Banner from './Banner';

export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <img
        src="/images/home/dspbn.png"
        alt="DSPBN"
        className="w-full mt-20 sm:mt-6"
      />
      <Solution />
       <TenYear />
    </Layout>
  );
}
