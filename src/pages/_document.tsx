import React from "react";
import Document, { Html, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "@utils/createEmotionCache";
import { Head } from 'next/document';
import { themeDark } from '@theme/index';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="emotion-insertion-point" content="" />
          <meta name="theme-color" content={themeDark.palette.primary.main} />
          <meta name="msapplication-TileColor" content={themeDark.palette.primary.main} />
          <meta name="msapplication-TileImage" content="/favicon.ico" />
          <meta name="msapplication-config" content="/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Indian Media Syndicate" />
          <meta name="application-name" content="IMS Corp." />
          <meta name="description" content="Corporate website of Indian Media Syndicate" />
          <meta name="keywords" content="Indian Media Syndicate" />
          <meta name="author" content="Brahmware" />
          <meta name="author-website" content="https://brahmware.com" />
          <meta name="author-email" content="hello@brahmware.com" />
          <meta name="contact-us" content="namaste@indianmediasyndicate.com" />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

MyDocument.getInitialProps = async (context) => {

  const originalRenderPage = context.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(context);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};