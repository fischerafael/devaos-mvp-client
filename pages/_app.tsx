import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { theme } from '../src/styles/Theme'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Dev Aos</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
