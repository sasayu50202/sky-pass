import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head suppressHydrationWarning />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
