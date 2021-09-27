import Image from 'next/image';

interface IProps {
  comment: {
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  };
}

const SingleComment = ({ comment }: IProps) => {
  return (
    <div>
      <div className='flex relative gap-4'>
        <div className='w-10 h-10 relative rounded-full overflow-hidden'>
          <Image src={comment.user.image} alt='users picture' layout='fill' />
        </div>
        <div>
          <p>{comment.user.name}</p>
          <p>@{comment.user.username}</p>
        </div>
        <div className='self-center absolute right-0'>Reply</div>
      </div>
      <div>
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

export default SingleComment;
