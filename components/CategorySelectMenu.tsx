import categorys from '../lib/content/categorys.json';
import Tag from './Tag';

const CategorySelectMenu = () => {
  return (
    <div className='bg-text-white rounded-lg py-6 pl-6 flex flex-wrap gap-x-2 gap-y-4'>
      {categorys.tags.map((tag, i) => (
        <Tag key={i} category={tag} />
      ))}
    </div>
  );
};

export default CategorySelectMenu;
