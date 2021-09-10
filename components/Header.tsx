import Image from 'next/image';
import hamburger from '../public/shared/mobile/icon-hamburger.svg';
const Header = () => {
  return (
    <header>
      <div className='bg-header-mobile sm:bg-header-tablet md:bg-header-desktop bg-no-repeat bg-cover grid grid-flow-col px-7 py-4'>
        <div className=''>
          <h2 className='text-base text-text-white'>Frontend Mentor</h2>
          <h3 className='text-xs text-text-grey'>Feedback Board</h3>
        </div>

        <div className='sm:hidden grid justify-end items-center'>
          <div>
            <Image src={hamburger} alt='hamburger' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
