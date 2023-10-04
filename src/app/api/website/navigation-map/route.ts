import { NavMap } from "@datatypes/NavMap";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const navMap: NavMap[] = [
    {
      title: 'Business',
      link: '/business',
      videoUrl: '/videos/navmenu/business.webm',
      items: [
        {
          title: 'About Us',
          link: '/business/about-us',
        },
        {
          title: 'Our Leadership',
          link: '/business/our-leadership',
        },
        {
          title: 'Diversity & Inclusion',
          link: '/business/diversity-and-inclusion',
        },
        {
          title: 'Career',
          link: '/business/career',
        },
      ],
    },
    {
      title: 'Media Network',
      link: '/media-network',
      videoUrl: '/videos/navmenu/media-network.webm',
      items: [
        {
          title: 'Business and Brands',
          link: '/media-network/business-and-brands',
        },
        {
          title: 'Focus Areas',
          link: '/media-network/focus-areas',
        },
        {
          title: 'Technology',
          link: '/media-network/technology',
        },
        {
          title: 'Newsroom',
          link: '/media-network/newsroom',
        },
      ],
    },
    {
      title: 'Education & Teaching',
      link: '/education-and-teaching',
      videoUrl: '/videos/navmenu/education-and-teaching.webm',
      items: [
        {
          title: 'Resources',
          link: '/education-and-teaching/resources',
        },
        {
          title: 'Professional Learning',
          link: '/education-and-teaching/professional-learning',
        },
        {
          title: 'Immersive Experience',
          link: '/education-and-teaching/immersive-experience',
        },
      ],
    },
    {
      title: 'Collaborators',
      link: '/collaborators',
      videoUrl: '/videos/navmenu/collaborators.webm',
      items: [
        {
          title: 'Explorers',
          link: '/collaborators/explorers',
        },
        {
          title: 'Producers',
          link: '/collaborators/producers',
        },
      ],
    },
    {
      title: 'Partners',
      link: '/partners',
      videoUrl: '/videos/navmenu/partners.webm',
      items: [
        {
          title: 'Corporate & Foundations',
          link: '/partners/corporate-and-foundations',
        },
        {
          title: 'Become a Member',
          link: '/partners/become-a-member',
        },
      ],
    },
    {
      title: 'Commercial',
      link: '/commercial',
      videoUrl: '/videos/navmenu/commercial.webm',
      items: [
        {
          title: 'Advertise with Us',
          link: '/commercial/advertise-with-us',
        },
        {
          title: 'Investors',
          link: '/commercial/investors',
        },
        {
          title: 'Sustainability Statement',
          link: '/commercial/sustainability-statement',
        },
      ],
    },
  ];

  return NextResponse.json(navMap);
};