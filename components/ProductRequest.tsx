interface IProps {
  request: {
    title: string;
    description: string;
  };
}

const ProductRequest = ({ request }: IProps) => {
  return (
    <div className='bg-text-white'>
      <h1>{request.title}</h1>
      <p>{request.description}</p>
    </div>
  );
};

export default ProductRequest;
