import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import MainLayout from "@layouts/MainLayout";
import Carousel from "@components/Carousel";
import Koel from "@containers/Koel";
import Malkoha from "@containers/Malkoha";
import Myna from "@containers/Myna";
import Honeyguide from "@containers/Honeyguide";
import Woodpaker from "@containers/Woodpecker";
import Parakeet from "@containers/Parakeet";

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
          updown="up"
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
            descriptionHTML: `Indian Media Syndicate endeavours to be the global leader in Exploration, Scientific Communications, Real Life Entertainment, serving enthusiastic Explorers around the world generating scientific journalism that inspires, informs, and entertains every age, at grassroots level, soaring high. <br /> <br />
            IMS is developing its’ unique voice AI for making real-time translation possible in all Indian languages. <br /> <br />
            This is an Indian family of informational, educational, and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by the world.`,
            button: {
              buttonText: 'VIEW MORE',
              link: '/business/about-us'
            }
          }}
        />
        <Malkoha
          updown="down"
          heading={{
            title: 'OUR MISSION',
            slogan: 'Lead the Indian Infotainment Media Revolution',
            description: 'By making every Information, every Discovery, every Invention, every Human Challenge accessible to every person starting with the Indian pacific Region. We\'ll Disrupt conventional Indian Media System, consumption and value by providing open platform to millions of minds with their theories about existence.',
          }}
        />
        <Myna
          updown="up"
          content={[
            {
              stat: '2.3Billion',
              context: 'Serviceable Audience',
              descriptionHTML: `Pan Asia Media creation & distribution.`,
              button: {
                buttonText: 'VIEW MORE',
                link: '/business/audience'
              }
            },
            {
              stat: '20+',
              context: 'Languages',
              descriptionHTML: `In audio channels for all media labels. All Indic languages covered.`,
              button: {
                buttonText: 'VIEW MORE',
                link: '/business/audience'
              }
            },
            {
              stat: '100+',
              context: 'Production Houses',
              descriptionHTML: `In Syndicate partnership, crafting the dream.`,
              button: {
                buttonText: 'VIEW MORE',
                link: '/business/audience'
              }
            },
          ]}
        />
        <Malkoha
          updown="down"
          heading={{
            title: 'OUR VISION',
            slogan: 'Break all Communication Barriers in Broadcast',
            description: 'By achieving real-time universal connection in a decentralized multi-linguistic Human society with technology at our disposal.',
          }}
        />
        <Koel
          updown="up"
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
            descriptionHTML: `Grasping attention is easier, keeping learners engaged throughout the process and command action is a different story. We learn much faster visually, and retention is simply great if it is rewarding. In comes the array of Immersive education for new generation of India. <br /> <br />
            Putting our best foot forward, IMS resources are used in teaching the new wave of decision-makers. Integrating with schools and teaching organizations, creating the seamless streaming of knowledge like never before.`,
            button: {
              buttonText: 'VIEW MORE',
              link: '/education-and-teaching/resources'
            }
          }}
        />
        <Honeyguide
          updown="down"
          content={[
            {
              id: 'IMSLife',
              title: 'IMS Life',
              link: 'https://imslife.indianmediasyndicate.com'
            },
            {
              id: 'IMScience',
              title: 'IMScience',
              link: 'https://imscience.indianmediasyndicate.com'
            },
            {
              id: 'WorldTv',
              title: 'World TV',
              link: 'https://worldtv.indianmediasyndicate.com'
            },
            {
              id: 'PopNews',
              title: 'PopNews',
              link: 'https://popnews.indianmediasyndicate.com'
            },
            {
              id: 'IMSHistory',
              title: 'IMS History',
              link: 'https://imshistory.indianmediasyndicate.com'
            }
          ]}
        />
        <Koel
          updown="up"
          images={{
            top: {
              src: '/images/home/container-6/image-top.jpg',
            },
            bottom: {
              src: '/images/home/container-6/image-bottom.jpg',
            },
          }}
          content={{
            title: 'EXPLORERS',
            sloganHTML: `Impactful programs <Br /> for a global community <br /> of Changemakers`,
            descriptionHTML: `We fund a worldwide network of Explorers who investigate, evaluate theories, revolutionize, take imagination to new heights, and push the limitations of traditional thinking in ways that fundamentally change humanity.`,
            button: {
              buttonText: 'VIEW MORE',
              link: '/collaborators/explorers'
            }
          }}
        />
        <Woodpaker
          updown="down"
          heading={{
            title: 'OUR SYMBOL',
            slogan: `Never Seen Before Pricing`,
          }}
          packages={[
            {
              id: 'daily',
              name: 'Daily',
              price: '₹ 1',
              tag: 'Most Popular',
              features: [
                'Upto <b>6 User Profiles</b>',
                '<b>Full Access</b> to IMS Network',
                '<b>HD</b> Streaming',
                '<b>Corporate Discount</b> Available',
                '<b>1</b> Screen'
              ],
            },
            {
              id: 'monthly',
              name: 'Monthly',
              price: '₹ 20',
              features: [
                'Upto <b>6 User Profiles</b>',
                '<b>Full Access</b> to IMS Network',
                '<b>FHD</b> Streaming',
                '<b>Corporate Discount</b> Available',
                '<b>2</b> Screens'
              ],
            },
            {
              id: 'yearly',
              name: 'Yearly',
              price: '₹ 250',
              tag: 'Value Pack',
              features: [
                'Upto <b>6 User Profiles</b>',
                '<b>Full Access</b> to IMS Network',
                '<b>4K+HDR</b> Streaming',
                '<b>Student Discount</b> Available',
                '<b>4</b> Screens'
              ],
            },
          ]}
          button={{
            buttonText: "GET STARTED",
            link: "/business/subscription"
          }}
        />
        <Parakeet 
          image={{
            src: '/images/home/container-8/background.jpg',
            alt: 'Production Ready IMS Resources'
          }}
          advertisement={{
            headline: 'Production Ready IMS Resources',
            slogan: 'Get your<br /> Free IMS Resources',
            button: {
              buttonText: 'Get Started',
              link: '/signup'
            }
          }}
        />
      </MainLayout>
    </React.Fragment>
  );
};

export default Home;