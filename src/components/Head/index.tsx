import React from 'react';
import { HeadProps } from '@interfaces/HeadProps';
import {Head as NextHead} from 'next/document';
import { themeDark } from '@theme/index';

const Head: React.FC<HeadProps> = (props) => (
  <NextHead {...props}>
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
    {props.children}
  </NextHead>
);

export default Head;