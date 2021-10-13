import Tag from '../global/Tag';
import LikesTag from '../global/LikesTag';
import CommentsTag from '../global/CommentsTag';

interface IPRops {
  request: {
    title: string;
    status: string;
    description: string;
    category: string;
    upvotes: number;
    comments: {}[];
  };
}

const RoadmapRequestCard = ({ request }: IPRops) => {
  return (
    <div className='bg-text-white rounded-lg'>
      <p>{request.status}</p>
      <h2>{request.title}</h2>
      <p>{request.description}</p>
      <Tag category={request.category} />
      <LikesTag upvotes={request.upvotes} />
      <CommentsTag comments={request.comments} />
    </div>
  );
};

export default RoadmapRequestCard;
