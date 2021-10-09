import React from 'react';
import categorys from '../lib/content/categorys.json';
import Tag from './Tag';

const CategorySelectMenu = () => {
  const clickHandler = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLElement;
    if (target.id !== 'tagContainer') {
      console.log(target.textContent);
      console.log(target);
    }
  };
  return (
    <div
      id='tagContainer'
      className='bg-text-white rounded-lg py-6 pl-6 flex flex-wrap gap-x-2 gap-y-4 sm:h-full'
      onClick={clickHandler}
    >
      {/* returns a tag component for every tag listed in the categorys.json file */}
      {categorys.tags.map((tag, i) => (
        <Tag key={i} category={tag} />
      ))}
    </div>
  );
};

export default CategorySelectMenu;
