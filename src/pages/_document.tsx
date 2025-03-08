import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head suppressHydrationWarning />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
