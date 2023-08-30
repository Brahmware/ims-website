import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '@layouts/MainLayout';

const Business: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Business Page</title>
      </Head>
      <MainLayout>
        <h1>Business</h1>
      </MainLayout>
    </React.Fragment>
  );
};

export default Business;