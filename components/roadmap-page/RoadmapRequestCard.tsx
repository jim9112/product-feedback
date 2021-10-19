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
  category: 'planned' | 'progress' | 'live';
}

// styles that are dependent on which category is selected
const styles = {
  planned: 'bg-orangish',
  progress: 'bg-button-primary',
  live: 'bg-sky-blue',
};

const RoadmapRequestCard = ({ request, category }: IPRops) => {
  // Capitolize the first letter in each word in status
  const captitolizedStatus = request.status
    .split('-')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join('-');

  // card for individual feedback
  return (
    <div className='bg-text-white rounded-lg '>
      <div className={`w-full h-2 rounded-t-lg ${styles[category]}`}></div>
      <div className='flex flex-col p-6 gap-y-4'>
        <div>
          <p>{captitolizedStatus}</p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h2 className='text-text-secondary text-sm'>{request.title}</h2>
          <p>{request.description}</p>
          <Tag category={request.category} />
        </div>
        <div className='flex justify-between'>
          <LikesTag upvotes={request.upvotes} />
          <CommentsTag comments={request.comments} />
        </div>
      </div>
    </div>
  );
};

export default RoadmapRequestCard;
