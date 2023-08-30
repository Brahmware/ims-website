import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import MainLayout from "@layouts/MainLayout";
import { Typography } from "@mui/material";

const MetaData: React.FC = () => {
  return (
    <Head>
      <title>IMS: Indian Media Syndicate</title>
    </Head>
  );
};

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <MetaData />
      <MainLayout>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Home Page
        </Typography>
      </MainLayout>
    </React.Fragment>
  );
};
export default Home;