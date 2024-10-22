import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { persistor, wrapper } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '@/components/Loading';
import Layout from '@/layouts/Layout';
import Head from 'next/head';
import { checkTokenExpiry } from '@/redux/features/authSlice';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper?.useWrappedStore(rest);

  if (typeof window !== 'undefined') {
    store.dispatch(checkTokenExpiry());
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener(
      'scroll',
      function handleScroll() {
        const scrollTopPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTopPosition > lastScrollTop) {
          document.body.classList.remove('scroll-bottom');
          document.body.classList.add('scroll-top');
        } else if (scrollTopPosition < lastScrollTop) {
          document.body.classList.remove('scroll-top');
          document.body.classList.add('scroll-bottom');
        }
        lastScrollTop =
          scrollTopPosition <= 0 ? 0 : scrollTopPosition;
      },
      false,
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<div className='w-screen h-screen bg-white'>
        <Loading />
      </div>} persistor={persistor}>
        <Layout>
          <Component {...props} />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            style={{ zIndex: 9999999999 }}
          />
        </Layout>
      </PersistGate>
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </Provider>
  )
}