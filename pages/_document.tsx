import { Html, Head, Main, NextScript } from "next/document";


// ——————————————————————————————————————————————————————————  DEFINE THE OVERALL STRUCTURE OF MY DOCUMENT

export default function Document() {

    return (

        <Html lang="en">
            <Head />
            <body className="bg-gradient-to-t from-gray-900 to-gray-600">

                <Main />
                <NextScript />

            </body>
        </Html>
    )
}