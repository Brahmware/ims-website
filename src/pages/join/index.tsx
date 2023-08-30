import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@layouts/MainLayout';

const Join: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Join IMS : Indian Media Syndicate</title>
      </Head>
      <MainLayout>
        <h1>Join</h1>
      </MainLayout>
    </React.Fragment>
  );
};

export default Join;