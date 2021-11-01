import Image from 'next/image';
import Replies from './Replies';

interface IProps {
  comment: {
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
    replies?: {}[];
  };
}

const SingleComment = ({ comment }: IProps) => {
  return (
    <div className='py-6'>
      <div className='flex relative gap-4 mb-4'>
        <div className='w-10 h-10 relative rounded-full overflow-hidden'>
          <Image src={comment.user.image} alt='users picture' layout='fill' />
        </div>
        <div>
          <p className='text-text-secondary text-sm font-bold'>
            {comment.user.name}
          </p>
          <p className='text-sm text-text-secondary-light'>
            @{comment.user.username}
          </p>
        </div>
        <div className='self-center absolute right-0 font-semibold text-text-blue text-sm cursor-pointer'>
          Reply
        </div>
      </div>
      <div>
        <p className='text-text-secondary-light text-sm'>{comment.content}</p>
      </div>
      {comment.replies && <Replies replies={comment.replies} />}
    </div>
  );
};

export default SingleComment;
