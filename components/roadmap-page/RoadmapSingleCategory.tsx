import RoadmapRequestCard from './RoadmapRequestCard';
import { IFeedback } from '../../lib/typesInterface';

interface IProps {
  displayCategoryState: 'planned' | 'progress' | 'live';
  roadmapState: {
    planned: IFeedback[];
    progress: IFeedback[];
    live: IFeedback[];
  } | null;
  category: 'planned' | 'progress' | 'live';
}

const RoadmapSingleCategory = ({
  displayCategoryState,
  roadmapState,
  category,
}: IProps) => {
  return (
    <div
      className={`${
        displayCategoryState === category ? 'flex' : 'hidden'
      } md:flex flex-col gap-y-4`}
    >
      {roadmapState &&
        roadmapState[category] &&
        roadmapState[category].map((request) => (
          <RoadmapRequestCard
            key={request.id}
            request={request}
            category={category}
          />
        ))}
    </div>
  );
};

export default RoadmapSingleCategory;
