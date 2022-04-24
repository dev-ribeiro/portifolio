import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Seja bem-vindo!</title>
                <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <link rel='icon' href='https://www.flaticon.com/svg/vstatic/svg/3916/3916581.svg?token=exp=1650581044~hmac=6dd48f63c73442fe81e705add05a7189'></link>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp