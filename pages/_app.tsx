import Footer from '@/components/Layout/Footer/Footer'
import Header from '@/components/Layout/Header/Header'
import SideBar from '@/components/Layout/SideBar/SideBar'
import '@/styles/code.css'
import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
                />
                <title>onivue-...</title>
            </Head>
            {/* =========== PAGEWRAPPER =========== */}
            <div className="flex min-h-screen bg-slate-50">
                <SideBar width="20rem" />
                {/* =========== CONTENTWRAPPER =========== */}
                <div className="flex w-full flex-col justify-around">
                    <Header />
                    {/* =========== MAINWRAPPER =========== */}
                    <main className={'container mx-auto flex h-full w-full justify-center px-4 pb-4'}>
                        <Component {...pageProps} />
                        {/* <RightSection /> */}
                    </main>
                    {/* =========== END MAINWRAPPER =========== */}
                    <Footer />
                </div>
                {/* =========== END CONTENTWRAPPER =========== */}
            </div>
            {/* =========== END PAGEWRAPPER =========== */}
        </>
    )
}

export default MyApp
