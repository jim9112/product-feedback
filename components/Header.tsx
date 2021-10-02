import Image from 'next/image';
import hamburger from '../public/shared/mobile/icon-hamburger.svg';
import { useState } from 'react';
import FilterMenu from './FilterMenu';
import CategorySelectMenu from './CategorySelectMenu';
import RoadmapMenu from './RoadmapMenu';

interface IProps {
  statusCount: Record<string, number> | undefined;
}

const Header = ({ statusCount }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='grid grid-cols-1 sm:grid-cols-3 sm:gap-x-3 sm:px-10 sm:pt-12 sm:pb-10'>
      <div className='relative h-20 sm:h-full sm:rounded-lg bg-header-mobile sm:bg-header-tablet md:bg-header-desktop bg-no-repeat bg-cover grid grid-flow-col px-7 py-4'>
        <div className=''>
          <h2 className='text-base text-text-white font-bold'>
            Frontend Mentor
          </h2>
          <h3 className='text-xs text-text-grey'>Feedback Board</h3>
        </div>

        {/* hamburger menu icon for mobile layout */}
        <div className='sm:hidden grid justify-end items-center'>
          <div>
            <Image
              className='cursor-pointer'
              src={hamburger}
              alt='hamburger'
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {/* filter menu for mobile view */}
        <FilterMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          statusCount={statusCount}
        />
      </div>

      {/* menu views for desktop and mobile */}
      <div className='hidden sm:block'>
        <CategorySelectMenu />
      </div>
      <div className='hidden sm:block'>
        <RoadmapMenu statusCount={statusCount} />
      </div>
    </header>
  );
};

export default Header;
