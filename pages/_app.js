import Head from 'next/head';
import '../public/global/globals.css';
import '../public/global/header.css'

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