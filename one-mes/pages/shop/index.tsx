import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeLayout from '../../layouts/HomeLayout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>피노마켓</title>
        <meta name="description" content="Generated by create next app" />  
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <HomeLayout></HomeLayout>
    </div>
  )
}

export default Home