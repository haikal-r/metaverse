import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Jelajahi dunia Metaverse dengan pengalaman virtual yang imersif. Temukan dunia baru, berinteraksi dengan komunitas, dan buat realitas digital Anda sendiri."/>
      <meta name="keywords" content="Metaverse, Virtual Reality, Dunia Virtual, Komunitas Online, Realitas Digital"/>
      <meta name="robots" content="index, follow"/>
      <meta name="author" content="Haikal Ramadhan"/>

      <meta property="og:title" content="Metaverse - Dunia Virtual yang Imersif"/>
      <meta property="og:description" content="Jelajahi dunia Metaverse dengan pengalaman virtual yang imersif. Temukan dunia baru, berinteraksi dengan komunitas, dan buat realitas digital Anda sendiri."/>
      <meta property="og:image" content="https://metaverse-eight-olive.vercel.app/metaverse-image.png"/>
      <meta property="og:url" content="https://metaverse-eight-olive.vercel.app"/>
      <meta property="og:type" content="website"/>

      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
