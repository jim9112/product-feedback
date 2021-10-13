import { useRouter } from 'next/router';
import BackButton from '../../components/global/BackButton';
import ProductRequest from '../../components/global/ProductRequest';
import Comments from '../../components/individualFeedbackPage/Comments';
import AddCommentForm from '../../components/forms/AddCommentForm';
import { useRecoilState } from 'recoil';
import { productRequestState } from '../../lib/atoms';
import useGetProductFeedback from '../../lib/hooks/useGetProductFeedback';
import Button from '../../components/global/Button';

const Feedback = () => {
  // get product requests from state
  const [productRequests, setProductRequests] =
    useRecoilState(productRequestState);

  // get query from router
  const router = useRouter();
  const { cid }: any = router.query;

  // get individual feedback based on selection and router query
  const { feedback } = useGetProductFeedback(productRequests, cid);

  return (
    <div className='bg-text-grey min-h-screen p-6 md:p-10'>
      <div className='mb-8 flex justify-between items-center'>
        <BackButton color='dark' />
        <Button
          color='lightBlue'
          size='small'
          type='button'
          content='Edit Feedback'
          cursor='pointer'
        />
      </div>
      <div className='flex flex-col gap-y-6'>
        {feedback && <ProductRequest request={feedback} />}
        {feedback?.comments && (
          <Comments comments={feedback.comments || null} />
        )}
        <AddCommentForm />
      </div>
    </div>
  );
};

export default Feedback;
