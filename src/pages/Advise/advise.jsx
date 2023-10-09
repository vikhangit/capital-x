import React from 'react'
import Banner from './Banner'
import Mentor from './mentor'
import MentorSwiper from './mentorSwiper'
import StartIPO from './startIPO'
import Layout from './../../components/Layout';

export default function Advise() {
  return (
    <Layout>
        <Banner />
        <div className="px-40 mt-10">
          <img src="/images/advise/Screen-Shot.png" alt="" />
        </div>
        <Mentor />
        <MentorSwiper />
        <StartIPO />
    </Layout>
  )
}
