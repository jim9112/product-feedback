import { useRouter } from 'next/router';
import Tag from '../global/Tag';
import LikesTag from '../global/LikesTag';
import CommentsTag from '../global/CommentsTag';

interface IProps {
  request: {
    id: number;
    title: string;
    status: string;
    description: string;
    category: string;
    upvotes: number;
    upvotedby?: [];
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

const RoadmapRequestCard = ({ request, category }: IProps) => {
  const router = useRouter();
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
        <div className='flex items-center gap-x-4'>
          <div className={`h-2 w-2 rounded-full ${styles[category]}`}></div>
          <p className='text-text-secondary-light text-sm'>
            {captitolizedStatus}
          </p>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h2
            className='text-text-secondary text-sm font-bold cursor-pointer'
            onClick={() => router.push(`/feedback/${request.id}`)}
          >
            {request.title}
          </h2>
          <p className='text-sm text-text-secondary-light'>
            {request.description}
          </p>
          <Tag category={request.category} />
        </div>
        <div className='flex justify-between'>
          <LikesTag
            upvotes={request.upvotes}
            upvotedBy={request.upvotedby}
            feedbackID={request.id}
          />
          <CommentsTag comments={request.comments} />
        </div>
      </div>
    </div>
  );
};

export default RoadmapRequestCard;
