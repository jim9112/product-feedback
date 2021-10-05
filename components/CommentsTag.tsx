import Image from 'next/image';
import commentIcon from '../public/shared/icon-comments.svg';

interface IProps {
  comments: {}[] | undefined;
}

const CommentsTag = ({ comments }: IProps) => {
  return (
    <div className='grid grid-flow-col sm:col-start-5 sm:row-start-1 gap-1 w-max font-bold text-text-secondary justify-self-end sm:self-center place-items-center'>
      <div>
        <Image src={commentIcon} alt='Comment Icon' />
      </div>
      <p className='sm:text-base'>
        {comments ? (
          comments?.length
        ) : (
          <span className='text-text-secondary-light'>0</span>
        )}
      </p>
    </div>
  );
};

export default CommentsTag;
