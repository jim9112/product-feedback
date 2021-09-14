import Image from 'next/image';
import hamburger from '../public/shared/mobile/icon-hamburger.svg';
import { useState } from 'react';
import FilterMenu from './FilterMenu';

interface IProps {
  statusCount: Record<string, number>;
}

const Header = ({ statusCount }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className='relative h-20 bg-header-mobile sm:bg-header-tablet md:bg-header-desktop bg-no-repeat bg-cover grid grid-flow-col px-7 py-4'>
        <div className=''>
          <h2 className='text-base text-text-white font-bold'>
            Frontend Mentor
          </h2>
          <h3 className='text-xs text-text-grey'>Feedback Board</h3>
        </div>

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
        <FilterMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          statusCount={statusCount}
        />
      </div>
    </header>
  );
};

export default Header;
