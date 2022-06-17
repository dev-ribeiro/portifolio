import Head from 'next/head';
import '../public/styles/globals.css';
import '../public/styles/header.css';
import '../public/styles/footer.css';
import '../public/styles/home.css';
import '../public/styles/projects.css';
import '../public/styles/about.css'

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