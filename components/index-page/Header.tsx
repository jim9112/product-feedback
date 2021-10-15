import Image from 'next/image';
import hamburger from '../../public/shared/mobile/icon-hamburger.svg';
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
    <header className='grid grid-flow-col sm:auto-cols-fr sm:grid-flow-col lg:auto-rows-max lg:grid-flow-row sm:gap-x-3 lg:gap-y-6 sm:px-10 lg:px-0 sm:pt-12 lg:pt-0 sm:pb-10'>
      <div className='relative h-20 sm:h-full lg:h-36 sm:rounded-lg bg-header-mobile sm:bg-header-tablet lg:bg-header-desktop bg-no-repeat bg-cover grid grid-flow-col px-7 py-4'>
        <div className='flex flex-col sm:justify-end'>
          <h2 className='text-base sm:text-xl text-text-white font-bold'>
            Frontend Mentor
          </h2>
          <h3 className='text-xs sm:text-base text-text-grey'>
            Feedback Board
          </h3>
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
