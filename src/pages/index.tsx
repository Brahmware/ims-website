import MainLayout from "@layouts/MainLayout";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Typography variant="h1" component="h1" gutterBottom>
        Welcome to Home Page
      </Typography>
    </MainLayout>
  );
};
export default Home;