import BackButton from '../components/global/BackButton';
import useSortRoadmapRequests from '../lib/hooks/useSortRoadmapRequests';
import RoadmapRequestCard from '../components/roadmap-page/RoadmapRequestCard';
import { useState } from 'react';
import Button from '../components/global/Button';

const Roadmap = () => {
  // get lists of requests sorted by status
  const { roadmapState } = useSortRoadmapRequests();

  // state that stores which category to display on mobile
  const [displayCategoryState, setDisplayCategoryState] = useState<
    'planned' | 'live' | 'progress'
  >('progress');

  return (
    <div className='bg-text-grey min-h-screen lg:px-44 lg:py-20'>
      <header className='bg-bg-dark px-5 py-6 flex justify-between'>
        <div>
          <BackButton color='light' />
          <h1 className='text-text-white font-bold text-lg'>Roadmap Page</h1>
        </div>
        <Button
          type='button'
          color='primary'
          content='+ Add Feedback'
          size='small'
        />
      </header>
      <div className='text-text-secondary grid grid-cols-3 text-center py-5'>
        <div>
          <h2
            className='cursor-pointer md:pointer-events-none'
            onClick={() => setDisplayCategoryState('planned')}
          >
            Planned ({roadmapState?.planned.length})
          </h2>
          <p className='hidden md:inline'>Ideas prioritized for research</p>
        </div>
        <div>
          <h2
            className='cursor-pointer md:pointer-events-none'
            onClick={() => setDisplayCategoryState('progress')}
          >
            In-Progress ({roadmapState?.progress.length})
          </h2>
          <p className='hidden md:inline'>Currently being developed</p>
        </div>
        <div>
          <h2
            className='cursor-pointer md:pointer-events-none'
            onClick={() => setDisplayCategoryState('live')}
          >
            Live ({roadmapState?.live.length})
          </h2>
          <p className='hidden md:inline'>Released features</p>
        </div>
      </div>
      <div className='text-text-secondary grid grid-cols-1 md:grid-cols-3'>
        <div
          className={`${
            displayCategoryState === 'planned' ? 'block' : 'hidden'
          } md:block`}
        >
          {roadmapState?.planned &&
            roadmapState?.planned.map((request) => (
              <RoadmapRequestCard key={request.id} request={request} />
            ))}
        </div>
        <div
          className={`${
            displayCategoryState === 'progress' ? 'block' : 'hidden'
          } md:block`}
        >
          {roadmapState?.progress &&
            roadmapState?.progress.map((request) => (
              <RoadmapRequestCard key={request.id} request={request} />
            ))}
        </div>
        <div
          className={`${
            displayCategoryState === 'live' ? 'block' : 'hidden'
          } md:block`}
        >
          {roadmapState?.live &&
            roadmapState?.live.map((request) => (
              <RoadmapRequestCard key={request.id} request={request} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
