import Image from 'next/image';
import iconArrowUp from '../../public/shared/icon-arrow-up.svg';

interface IProps {
  upvotes: number;
}

const LikesTag = ({ upvotes }: IProps) => {
  return (
    <div className='bg-text-grey sm:col-start-1 sm:row-start-1 px-4 py-1 rounded-lg text-text-secondary font-bold grid grid-flow-col sm:grid-flow-row sm:justify-items-center justify-center w-max sm:h-14 gap-2'>
      <div className='grid items-center sm:w-2'>
        <Image src={iconArrowUp} alt='Up Arrow' />
      </div>
      <p>{upvotes}</p>
    </div>
  );
};

export default LikesTag;
