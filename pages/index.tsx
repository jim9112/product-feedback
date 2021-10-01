import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import ProductRequest from '../components/ProductRequest';
import Toolbar from '../components/Toolbar';
import data from '../lib/content/data.json';
import FeedbackContext from '../lib/context/feedback-context';

type IRequest = {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: {}[];
}[];

const Home: NextPage = () => {
  const { productRequests, setProductRequests } = useContext<IRequest | {}>(
    FeedbackContext
  );
  // const [productRequests, setProductRequests] = useState<IRequest | null>(null);
  const [statusCount, setStatusCount] = useState<Record<string, number>>();
  const status: Record<string, number> = {};

  // count element statuses
  useEffect(() => {
    data.productRequests.forEach((element: { status: string }) => {
      if (status[element.status]) {
        status[element.status] += 1;
      } else {
        status[element.status] = 1;
      }
    });
    setStatusCount(status);
  }, []);

  return (
    <div className='bg-text-grey min-h-screen'>
      <Head>
        <title>Product Feedback App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Header statusCount={statusCount} />
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
