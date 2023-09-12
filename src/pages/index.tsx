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
        <Koel
          images={{
            top: {
              src: '/images/home/container-2/image-top.jpg',
            },
            bottom: {
              src: '/images/home/container-2/image-bottom.jpg',
            },
          }}
          content={{
            title: 'ABOUT US',
            sloganHTML: `India, Explore! <br /> Dream! Lead!`,
            descriptionHTML: `Indian Media Syndicate endeavours to be the global leader in Exploration, Scientific Communications, Real Life Entertainment, serving enthusiastic Explorers around the world generating scientific journalism that inspires, informs, and entertains every age, at grassroots level, soaring high. <br />
            IMS is developing its’ unique voice AI for making real-time translation possible in all Indian languages. <br />
            This is an Indian family of informational, educational, and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by the world.`,
            button: {
              buttonText: 'VIEW MORE'
            }
          }}
        />
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;