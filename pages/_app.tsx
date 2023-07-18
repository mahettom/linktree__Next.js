import '../styles/globals.css'
import { AppProps } from "next/app"

// ——————————————————————————————————————————————————————————————— KIND OF THE GLOBAL LAYOUT OF THE APP
// ——————————————————————————————————————————————————————————————— (WHERE ALL THE MAGIC OF NEXT HAPPEN)

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}