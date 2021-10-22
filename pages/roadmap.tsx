import { useState } from 'react';
import useSortRoadmapRequests from '../lib/hooks/useSortRoadmapRequests';
import RoadmapHeader from '../components/roadmap-page/RoadmapHeader';
import RoadmapSelection from '../components/roadmap-page/RoadmapSelection';
import RoadmapSingleCategory from '../components/roadmap-page/RoadmapSingleCategory';

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
        displayCategoryState={displayCategoryState}
      />
      {/* displays all of the feedback that is tagged as 'planned', 'live', or in progress */}
      <div className='text-text-secondary grid grid-cols-1 md:grid-cols-3 px-6'>
        <RoadmapSingleCategory
          category='planned'
          displayCategoryState={displayCategoryState}
          roadmapState={roadmapState}
        />
        <RoadmapSingleCategory
          category='progress'
          displayCategoryState={displayCategoryState}
          roadmapState={roadmapState}
        />
        <RoadmapSingleCategory
          category='live'
          displayCategoryState={displayCategoryState}
          roadmapState={roadmapState}
        />
      </div>
    </div>
  );
};

export default Roadmap;
