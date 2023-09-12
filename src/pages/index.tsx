import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import MainLayout from "@layouts/MainLayout";
import Carousel from "@components/Carousel";
import Koel from "@containers/Koel";
import { Box } from "@mui/material";

const MetaData: React.FC = () => {
  return (
    <Head>
      <title>IMS: Indian Media Syndicate</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  );
};

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <MetaData />
      <MainLayout>
        <Carousel />
        <Koel />
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;