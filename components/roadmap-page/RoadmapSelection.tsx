import { Dispatch, SetStateAction } from 'react';

interface IProps {
  roadmapState: {
    planned: {}[];
    progress: {}[];
    live: {}[];
  } | null;
  setDisplayCategoryState: Dispatch<
    SetStateAction<'planned' | 'live' | 'progress'>
  >;
}

const RoadmapSelection = ({
  roadmapState,
  setDisplayCategoryState,
}: IProps) => {
  return (
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
  );
};

export default RoadmapSelection;
