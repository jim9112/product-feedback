import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Product Feedback App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Header />
      <main>
        <h1 className='text-red-500'>Product Feedback App</h1>
      </main>
    </div>
  );
};

export default Home;
