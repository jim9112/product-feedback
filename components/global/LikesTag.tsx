import Image from 'next/image';
import iconArrowUp from '../../public/shared/icon-arrow-up.svg';
import iconArrowUpWhite from '../../public/shared/icon-arrow-up-white.svg';
import useAddLike from '../../lib/hooks/useAddLike';
import { currentUserState } from '../../lib/atoms';
import { useRecoilValue } from 'recoil';

interface IProps {
  upvotes: number;
  feedbackID: number;
  upvotedBy?: string[];
}

const LikesTag = ({ upvotes, feedbackID, upvotedBy }: IProps) => {
  const currentUser = useRecoilValue(currentUserState);
  const addLike = useAddLike(feedbackID);
  // To Do conditionally style

  return (
    <div
      onClick={addLike}
      className={`sm:col-start-1 sm:row-start-1 rounded-lg font-bold w-max sm:h-14 cursor-pointer ${
        upvotedBy?.includes(currentUser.username)
          ? 'bg-text-blue pointer-events-none text-text-grey'
          : 'bg-text-grey text-text-secondary'
      }`}
    >
      <div className='grid grid-flow-col sm:grid-flow-row sm:justify-items-center justify-center gap-2 px-4 py-1 h-full'>
        <div className='grid items-center sm:w-2'>
          <Image
            src={
              upvotedBy?.includes(currentUser.username)
                ? iconArrowUpWhite
                : iconArrowUp
            }
            alt='Up Arrow'
          />
        </div>
        <p>{upvotes || 0}</p>
      </div>
    </div>
  );
};

export default LikesTag;
