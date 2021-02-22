import { Provider } from 'react-redux';

import store from '../store';

import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
