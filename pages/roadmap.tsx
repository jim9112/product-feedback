import BackButton from '../components/BackButton';
import { useRecoilState } from 'recoil';
import { productRequestState } from '../lib/atoms';
import { useEffect, useState } from 'react';

const Roadmap = () => {
  // get product requests from state
  const [productRequests, setProductRequests] =
    useRecoilState(productRequestState);
  const [roadmapState, setRoadmapState] = useState({
    planned: [],
    progress: [],
    live: [],
  });

  useEffect(() => {
    const tempObj = { ...roadmapState };
    productRequests.forEach((request) => {
      if (request.status === 'in-progress') {
        tempObj.progress.push(request);
      } else if (request.status === 'planned') {
        tempObj.planned.push(request);
      } else if (request.status === 'live') {
        tempObj.live.push(request);
      }
    });
    setRoadmapState({ ...tempObj });
  }, [productRequests]);

  return (
    <div className='lg:px-44 lg:py-20'>
      <header className='bg-bg-dark'>
        <BackButton color='light' />
        <h1>Roadmap Page</h1>
      </header>
      <div className='text-text-secondary grid grid-cols-3'>
        <div>
          <h2>Planned</h2>
        </div>
        <div>
          <h2>In-Progress</h2>
        </div>
        <div>
          <h2>Live</h2>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
