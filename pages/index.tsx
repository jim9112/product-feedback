import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import Header from '../components/Header';
import ProductRequest from '../components/ProductRequest';
import Toolbar from '../components/Toolbar';
import { productRequestState } from '../lib/atoms';

const Home: NextPage = () => {
  const productRequests = useRecoilValue(productRequestState);

  const [statusCount, setStatusCount] = useState<Record<string, number>>();
  const status: Record<string, number> = {};

  // To Do: move to custom hook
  // count element statuses
  useEffect(() => {
    productRequests.forEach((element: { status: string }) => {
      if (status[element.status]) {
        status[element.status] += 1;
      } else {
        status[element.status] = 1;
      }
    });
    setStatusCount(status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='bg-text-grey min-h-screen'>
      <Head>
        <title>Product Feedback App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Header statusCount={statusCount} />
      <Toolbar suggestionAmount={productRequests.length} />
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
