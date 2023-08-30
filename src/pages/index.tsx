import React from "react";
import type { NextPage } from "next";
import MainLayout from "@layouts/MainLayout";
import { Typography } from "@mui/material";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>IMS: Indian Media Syndicate</title>
      </Head>
      <MainLayout>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Home Page
        </Typography>
      </MainLayout>
    </React.Fragment>
  );
};
export default Home;