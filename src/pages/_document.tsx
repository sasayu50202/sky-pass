import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head suppressHydrationWarning />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
