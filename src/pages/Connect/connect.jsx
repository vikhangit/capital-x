import React from 'react'
import Layout from '../../components/Layout'
import Banner from './Banner';
import Project from './Project';
import Customer from './customer';
import Brand from './brand';

export default function Connect() {
  return (
    <Layout>
      <Banner />
      <img src="/images/connect/map.png" alt="" className='mt-2'/>
      <Project />
      <Customer />
      <Brand />
    </Layout>
  )
}
