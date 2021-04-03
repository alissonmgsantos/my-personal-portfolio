import Layout from '../layout';
import { GlobalStyles } from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
