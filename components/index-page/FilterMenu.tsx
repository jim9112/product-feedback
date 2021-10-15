import { Dispatch, SetStateAction } from 'react';
import CategorySelectMenu from './CategorySelectMenu';
import RoadmapMenu from './RoadmapMenu';

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  statusCount: Record<string, number> | undefined;
}

const FilterMenu = ({ isOpen, setIsOpen, statusCount }: IProps) => {
  const handleClick = (e: React.SyntheticEvent) => {
    const element = e.target as HTMLElement;
    if (element.id === 'menuContainer') setIsOpen(!isOpen);
  };

  return (
    <div
      id='menuContainer'
      className={`${
        isOpen ? 'block' : 'hidden'
      } absolute sm:static top-0 right-0 left-0 min-h-screen`}
      onClick={(e) => handleClick(e)}
    >
      <div className='absolute flex flex-col gap-y-6 sm:static z-10 right-0 top-20 min-h-screen w-64 p-6 bg-text-grey'>
        <CategorySelectMenu />
        <RoadmapMenu statusCount={statusCount} />
      </div>
    </div>
  );
};

export default FilterMenu;
