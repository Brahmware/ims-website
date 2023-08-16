import ThemeUpdater from "@components/ThemeUpdater";
import Navbar from "@components/navigation/Navbar";
import { NavigationMenuStateProvider } from "@helpers/NavigationMenuStateProvider";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <NavigationMenuStateProvider>
      <Navbar />
      <main style={{
        height: "150vh",
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Home Page
        </Typography>
        <ThemeUpdater />
      </main>
    </NavigationMenuStateProvider>
  );
};
export default Home;