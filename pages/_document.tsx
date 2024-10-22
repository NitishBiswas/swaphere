import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head title="Quiickpage" />
            <meta
                name="description"
                content="Created by Quiickpage"
            />
            <body>
                <div id="modalBody"></div>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
