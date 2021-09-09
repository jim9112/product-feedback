import Image from 'next/image';
import hamburger from '../public/shared/mobile/icon-hamburger.svg';
const Header = () => {
  return (
    <header className='bg-header-mobile sm:bg-header-tablet md:bg-header-desktop bg-no-repeat'>
      <div>
        <h2>Frontend Mentor</h2>
        <h3>Feedback Board</h3>
      </div>
      <div>
        <Image src={hamburger} alt='hamburger' />
      </div>
    </header>
  );
};

export default Header;
