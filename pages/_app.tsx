import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { FeedbackContextProvider } from '../lib/context/feedback-context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FeedbackContextProvider>
      <Component {...pageProps} />
    </FeedbackContextProvider>
  );
}
export default MyApp;
