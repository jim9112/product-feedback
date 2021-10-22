import RoadmapRequestCard from './RoadmapRequestCard';
interface IRequests {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: {
    id: number;
    content: string;
    user: { image: string; name: string; username: string };
    replies?: {
      content: string;
      replyingTo: string;
      user: { image: string; name: string; username: string };
    }[];
  }[];
}
interface IProps {
  displayCategoryState: 'planned' | 'progress' | 'live';
  roadmapState: {
    planned: IRequests[];
    progress: IRequests[];
    live: IRequests[];
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
