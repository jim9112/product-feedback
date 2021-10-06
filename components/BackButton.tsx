import { useRouter } from 'next/router';
import Image from 'next/image';
import iconArrowLeft from '../public/shared/icon-arrow-left.svg';

interface IProps {
  color: 'light' | 'dark';
}

const styles = {
  dark: 'text-text-secondary',
  light: 'text-text-white',
};

const BackButton = ({ color }: IProps) => {
  const router = useRouter();
  return (
    <div
      className='flex align-middle max-w-max gap-4 font-bold text-sm cursor-pointer'
      onClick={() => router.back()}
    >
      <div>
        <Image src={iconArrowLeft} alt='left arrow icon' />
      </div>
      <span className={`${styles[color]}`}>Go Back</span>
      {/* <Link href='/'>Go Back</Link> */}
    </div>
  );
};

export default BackButton;
