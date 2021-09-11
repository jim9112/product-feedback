interface IProps {
  category: string;
}

const Tag = ({ category }: IProps) => {
  return (
    <div className='bg-text-grey inline-block px-4 py-1 rounded-lg text-text-blue w-max'>
      <h2>{`${category.charAt(0).toUpperCase()}${category.slice(1)}`}</h2>
    </div>
  );
};

export default Tag;
