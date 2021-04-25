import 'react-perfect-scrollbar/dist/css/styles.css';
import { GlobalStyles } from '../../themes';
import Layout from '../layouts';
import { LanguageProvider } from '../providers/language';
function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
