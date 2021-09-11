import Image from 'next/image';
import iconArrowUp from '../public/shared/icon-arrow-up.svg';

interface IProps {
  upvotes: number;
}

const LikesTag = ({ upvotes }: IProps) => {
  return (
    <div className='bg-text-grey px-4 py-1 rounded-lg text-text-secondary font-bold grid grid-flow-col justify-center w-max gap-2'>
      <div className='grid items-center'>
        <Image src={iconArrowUp} alt='Up Arrow' />
      </div>
      <p>{upvotes}</p>
    </div>
  );
};

export default LikesTag;
