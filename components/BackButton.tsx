import { useRouter } from 'next/router';
import Image from 'next/image';
import iconArrowLeft from '../public/shared/icon-arrow-left.svg';

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className='flex align-middle max-w-max gap-4 font-bold text-text-secondary text-sm mb-8 cursor-pointer'
      onClick={() => router.back()}
    >
      <div>
        <Image src={iconArrowLeft} alt='left arrow icon' />
      </div>
      <span className=''>Go Back</span>
      {/* <Link href='/'>Go Back</Link> */}
    </div>
  );
};

export default BackButton;
