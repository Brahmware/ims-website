import ThemeUpdater from "@components/ThemeUpdater";
import Navbar from "@components/navigation/NavBar";
import NavMenu from "@components/navigation/NavMenu";
import { NavigationMenuStateProvider } from "@helpers/NavigationMenuStateProvider";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <NavigationMenuStateProvider>
      <Navbar />
      <NavMenu />
      <main style={{
        height: "125vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Home Page
        </Typography>
      </main>
    </NavigationMenuStateProvider>
  );
};
export default Home;