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
  displayCategoryState: 'planned' | 'progress' | 'live';
}

const styles = {
  planned: 'border-b-4 border-orangish',
  progress: 'border-b-4 border-button-primary',
  live: 'border-b-4 border-sky-blue',
};

const RoadmapSelection = ({
  roadmapState,
  setDisplayCategoryState,
  displayCategoryState,
}: IProps) => {
  return (
    <div className='text-text-secondary grid grid-cols-3 text-center md:text-left pt-5 border-b-2 md:border-b-0 border-text-secondary-light'>
      <div
        className={`${
          displayCategoryState === 'planned' ? styles.planned : ''
        } md:border-b-0 pb-5`}
      >
        <h2
          className='cursor-pointer md:pointer-events-none font-bold'
          onClick={() => setDisplayCategoryState('planned')}
        >
          Planned ({roadmapState?.planned.length})
        </h2>
        <p className='hidden md:inline text-text-secondary-light'>
          Ideas prioritized for research
        </p>
      </div>
      <div
        className={`${
          displayCategoryState === 'progress' ? styles.progress : ''
        } md:border-b-0 pb-5`}
      >
        <h2
          className='cursor-pointer md:pointer-events-none font-bold'
          onClick={() => setDisplayCategoryState('progress')}
        >
          In-Progress ({roadmapState?.progress.length})
        </h2>
        <p className='hidden md:inline text-text-secondary-light'>
          Currently being developed
        </p>
      </div>
      <div
        className={`${
          displayCategoryState === 'live' ? styles.live : ''
        } md:border-b-0 pb-5`}
      >
        <h2
          className='cursor-pointer md:pointer-events-none font-bold'
          onClick={() => setDisplayCategoryState('live')}
        >
          Live ({roadmapState?.live.length})
        </h2>
        <p className='hidden md:inline text-text-secondary-light'>
          Released features
        </p>
      </div>
    </div>
  );
};

export default RoadmapSelection;
