import { Provider } from 'react-redux';
import Link from 'next/link';

import store from '../store';

import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <link
        rel="preload"
        href="/fonts/Montserrat/Montserrat-Bold.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Montserrat/Montserrat-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Montserrat/Montserrat-Medium.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
        as="font"
        crossOrigin=""
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
