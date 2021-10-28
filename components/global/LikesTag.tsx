import Image from 'next/image';
import iconArrowUp from '../../public/shared/icon-arrow-up.svg';
import useAddLike from '../../lib/hooks/useAddLike';

interface IProps {
  upvotes: number;
  feedbackID: number;
}

const LikesTag = ({ upvotes, feedbackID }: IProps) => {
  const addLike = useAddLike(feedbackID);

  return (
    <div
      onClick={addLike}
      className='bg-text-grey sm:col-start-1 sm:row-start-1 px-4 py-1 rounded-lg text-text-secondary font-bold grid grid-flow-col sm:grid-flow-row sm:justify-items-center justify-center w-max sm:h-14 gap-2 cursor-pointer'
    >
      <div className='grid items-center sm:w-2'>
        <Image src={iconArrowUp} alt='Up Arrow' />
      </div>
      <p>{upvotes || 0}</p>
    </div>
  );
};

export default LikesTag;
