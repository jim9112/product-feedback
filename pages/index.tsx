import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductRequest from '../components/ProductRequest';
import Toolbar from '../components/Toolbar';
import data from '../lib/content/data.json';

type IRequest = {
  id: number;
  title: string;
  description: string;
}[];

const Home: NextPage = () => {
  const [productRequests, setProductRequests] = useState<IRequest | null>(null);
  useEffect(() => {
    console.log(data.productRequests);
    setProductRequests(data.productRequests);
  }, []);
  return (
    <div className='bg-text-grey min-h-screen'>
      <Head>
        <title>Product Feedback App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Header />
      <Toolbar />
      <main className='px-6 pt-8 pb-14 grid grid-cols-1 gap-4'>
        {productRequests &&
          productRequests.map((request) => (
            <ProductRequest key={request.id} request={request} />
          ))}
      </main>
    </div>
  );
};

export default Home;
