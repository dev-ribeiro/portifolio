import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Seja bem-vindo!</title>
                <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <link rel='icon' href='/assets/cpu.png'></link>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp