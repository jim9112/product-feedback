import Tag from './Tag';

interface IProps {
  request: {
    title: string;
    description: string;
    category: string;
  };
}

const ProductRequest = ({ request }: IProps) => {
  return (
    <div className='bg-text-white text-sm p-6 rounded-xl'>
      <h1 className='font-bold text-text-secondary'>{request.title}</h1>
      <p className='text-text-secondary-light'>{request.description}</p>
      <Tag category={request.category} />
    </div>
  );
};

export default ProductRequest;
