import Head from 'next/head';
import '../public/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Seja bem-vindo!</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
};