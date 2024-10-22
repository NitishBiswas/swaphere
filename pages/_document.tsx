import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head title="SwapHere" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="SwapHere helps you to find solutions for your business." />
            <meta name="keywords" content="SwapHere, software company, appify" />
            <meta property="og:title" content="SwapHere" />
            <meta property="og:description" content="SwapHere helps you to find solutions for your business." />
            <meta property="og:image" content="/favicon.svg" />
            <meta property="og:url" content="https://swaphere.com" />
            <meta property="og:site_name" content="SwapHere" />
            <meta property="og:type" content="website" />
            <body>
                <div id="modalBody"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
