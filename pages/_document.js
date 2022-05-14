import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2803687290017977"
            crossOrigin="anonymous"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument