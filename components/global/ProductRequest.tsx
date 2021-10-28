import { useRouter } from 'next/router';
import CommentsTag from './CommentsTag';
import LikesTag from './LikesTag';
import Tag from './Tag';

interface IProps {
  request: {
    id: number;
    title: string;
    description: string;
    category: string;
    upvotes: number;
    comments?: {}[];
  };
}

const ProductRequest = ({ request }: IProps) => {
  const router = useRouter();
  return (
    <div className='bg-text-white text-sm p-6 sm:px-8 sm:py-7 rounded-xl grid grid-cols-2 sm:grid-cols-5'>
      <div className='grid grid-flow-row gap-2 col-span-2 sm:col-span-3 sm:col-start-2 mb-4 sm:mb-0'>
        <h1
          className='font-bold text-text-secondary sm:text-lg cursor-pointer'
          onClick={() => router.push(`/feedback/${request.id}`)}
        >
          {request.title}
        </h1>
        <p className='text-text-secondary-light sm:text-base'>
          {request.description}
        </p>
        <Tag category={request.category} />
      </div>

      <LikesTag upvotes={request.upvotes} feedbackID={request.id} />
      <CommentsTag comments={request.comments} />
    </div>
  );
};

export default ProductRequest;
