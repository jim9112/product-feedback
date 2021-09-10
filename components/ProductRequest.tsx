interface IProps {
  request: {
    title: string;
  };
}

const ProductRequest = ({ request }: IProps) => {
  return (
    <div>
      <h1>{request.title}</h1>
    </div>
  );
};

export default ProductRequest;
