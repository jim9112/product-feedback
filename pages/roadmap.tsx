import { useState } from 'react';
import useSortRoadmapRequests from '../lib/hooks/useSortRoadmapRequests';
import RoadmapRequestCard from '../components/roadmap-page/RoadmapRequestCard';
import RoadmapHeader from '../components/roadmap-page/RoadmapHeader';
import RoadmapSelection from '../components/roadmap-page/RoadmapSelection';

const Roadmap = () => {
  // get lists of requests sorted by status
  const { roadmapState } = useSortRoadmapRequests();

  // state that stores which category to display on mobile
  const [displayCategoryState, setDisplayCategoryState] = useState<
    'planned' | 'live' | 'progress'
  >('progress');

  return (
    <div className='bg-text-grey min-h-screen lg:px-44 lg:py-20'>
      {/* page header */}
      <RoadmapHeader />
      {/* heading/mobile menu for roadmap status display */}
      <RoadmapSelection
        roadmapState={roadmapState}
        setDisplayCategoryState={setDisplayCategoryState}
      />
      {/* displays all of the feedback that is tagged as 'planned', 'live', or in progress */}
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
