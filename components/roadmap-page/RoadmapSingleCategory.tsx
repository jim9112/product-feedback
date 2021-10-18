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
        displayCategoryState === category ? 'grid' : 'hidden'
      } md:grid grid-cols-1 gap-y-4`}
    >
      {roadmapState &&
        roadmapState[category] &&
        roadmapState[category].map((request) => (
          <RoadmapRequestCard key={request.id} request={request} />
        ))}
    </div>
  );
};

export default RoadmapSingleCategory;
