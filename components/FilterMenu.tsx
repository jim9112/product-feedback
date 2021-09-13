import categorys from '../lib/content/categorys.json';
import Tag from './Tag';

interface IProps {
  isOpen: boolean;
}

const FilterMenu = ({ isOpen }: IProps) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute sm:static z-10 right-0 top-20 min-h-screen w-64 p-6 bg-text-grey`}
    >
      <div className='bg-text-white rounded-lg py-6 pl-6 flex flex-wrap gap-x-2 gap-y-4'>
        {categorys.tags.map((tag, i) => (
          <Tag key={i} category={tag} />
        ))}
      </div>
    </div>
  );
};

export default FilterMenu;
