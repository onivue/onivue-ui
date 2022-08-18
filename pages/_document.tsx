import Document, { Html, Head, Main, NextScript } from 'next/document'

const APP_NAME = 'onivue'
const APP_DESCRIPTION = 'onivue'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="apple-mobile-web-app-title" content={APP_NAME} />
                    <meta name="application-name" content={APP_NAME} />
                    <meta name="description" content={APP_DESCRIPTION} />
                    <meta name="theme-color" content="#f9e288" />
                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                    <link rel="shortcut icon" href="/icons/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
