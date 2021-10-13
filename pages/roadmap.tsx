import BackButton from '../components/global/BackButton';
import useSortRoadmapRequests from '../lib/hooks/useSortRoadmapRequests';
import RoadmapRequestCard from '../components/roadmap-page/RoadmapRequestCard';

const Roadmap = () => {
  // get lists of requests sorted by status
  const { roadmapState } = useSortRoadmapRequests();

  return (
    <div className='bg-text-grey min-h-screen lg:px-44 lg:py-20'>
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
      <div className='text-text-secondary grid grid-cols-3'>
        <div>
          {roadmapState?.planned &&
            roadmapState?.planned.map((request) => (
              <RoadmapRequestCard key={request.id} request={request} />
            ))}
        </div>
        <div>
          {roadmapState?.progress &&
            roadmapState?.progress.map((request) => (
              <RoadmapRequestCard key={request.id} request={request} />
            ))}
        </div>
        <div>
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
