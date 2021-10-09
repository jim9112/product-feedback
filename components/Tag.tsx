interface IProps {
  category: string;
  selectedTag?: string;
}

const Tag = ({ category, selectedTag }: IProps) => {
  return (
    <div
      className={`${
        selectedTag && selectedTag.toLowerCase() === category.toLowerCase()
          ? 'bg-text-blue text-text-white'
          : 'bg-text-grey text-text-blue w-max'
      } ${selectedTag && 'cursor-pointer'} inline-block px-4 py-1 rounded-lg `}
    >
      <h2>{`${category.charAt(0).toUpperCase()}${category.slice(1)}`}</h2>
    </div>
  );
};

export default Tag;
