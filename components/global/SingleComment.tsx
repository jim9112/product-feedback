import Image from 'next/image';
import { useRouter } from 'next/router';
import Replies from './Replies';
import { IComment } from '../../lib/typesInterface';
import AddCommentForm from '../forms/AddCommentForm';
import useGetProductFeedback from '../../lib/hooks/useGetProductFeedback';
import { productRequestState } from '../../lib/atoms';
import { useRecoilState } from 'recoil';
import { useState } from 'react';

interface IProps {
  comment: IComment;
  commentType?: 'reply' | 'comment';
}

const SingleComment = ({ comment, commentType = 'comment' }: IProps) => {
  // get product requests from state
  const [productRequests, setProductRequests] =
    useRecoilState(productRequestState);
  // state that controlsif reply form is visibile
  const [displayForm, setDisplayForm] = useState(false);

  // get query from router
  const router = useRouter();
  const { cid }: any = router.query;

  // get individual feedback based on selection and router query
  const { feedback } = useGetProductFeedback(productRequests, cid);

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
        {commentType === 'comment' && (
          <button
            type='button'
            className='self-center absolute right-0 font-semibold text-text-blue text-sm cursor-pointer'
            onClick={() => setDisplayForm(!displayForm)}
          >
            Reply
          </button>
        )}
      </div>
      <div>
        <p className='text-text-secondary-light text-sm'>{comment.content}</p>
      </div>
      {comment.replies && <Replies replies={comment.replies} />}
      <div>
        {feedback && displayForm ? (
          <AddCommentForm
            feedback={feedback}
            commentId={comment.id}
            commentType={'reply'}
            setDisplayForm={setDisplayForm}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SingleComment;
