import Head from 'next/head';
import GlobalStyles from '../theme/global';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alisson matos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
    </div>
  );
}
