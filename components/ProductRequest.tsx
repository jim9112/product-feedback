import LikesTag from './LikesTag';
import Tag from './Tag';

interface IProps {
  request: {
    title: string;
    description: string;
    category: string;
    upvotes: number;
  };
}

const ProductRequest = ({ request }: IProps) => {
  return (
    <div className='bg-text-white text-sm p-6 rounded-xl grid grid-cols-2'>
      <div className='grid grid-flow-row gap-2 col-span-2'>
        <h1 className='font-bold text-text-secondary'>{request.title}</h1>
        <p className='text-text-secondary-light'>{request.description}</p>
        <Tag category={request.category} />
      </div>

      <LikesTag upvotes={request.upvotes} />
    </div>
  );
};

export default ProductRequest;
