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
              buttonText: 'VIEW MORE',
              link: '/business/about-us'
            }
          }}
        />
        <Koel
          direction="rtl"
          images={{
            top: {
              src: '/images/home/container-4/image-top.jpg',
            },
            bottom: {
              src: '/images/home/container-4/image-bottom.jpg',
            },
          }}
          content={{
            title: 'IMMERSIVE TEACHING',
            sloganHTML: `A Strategy to <br />
            Revolutionize Learning`,
            descriptionHTML: `Grasping attention is easier, keeping learners engaged throughout the process and command action is a different story. We learn much faster visually, and retention is simply great if it is rewarding. In comes the array of Immersive education for new generation of India. <br />
            Putting our best foot forward, IMS resources are used in teaching the new wave of decision-makers. Integrating with schools and teaching organizations, creating the seamless streaming of knowledge like never before.`,
            button: {
              buttonText: 'VIEW MORE',
              link: '/education-and-teaching/resources'
            }
          }}
        />
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;