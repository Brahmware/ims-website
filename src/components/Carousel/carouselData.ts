export interface CarouselData {
  id: number;
  tagline?: string;
  title: string;
  description: string;
  image: string;
  pauseTime?: number;
  link: string;
}

const carouselData : CarouselData[] = [
  {
    id: 1,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    image: "/images/home/container-1/slide-1.jpg",
    pauseTime: 5000,
    link: "/",
  },
  {
    id: 2,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    image: "/images/home/container-1/slide-2.jpg",
    pauseTime: 10000,
    link: "/",
  },
  {
    id: 3,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    image: "/images/home/container-1/slide-3.jpg",
    pauseTime: 5000,
    link: "/",
  },
  {
    id: 4,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    image: "/images/home/container-1/slide-4.jpg",
    pauseTime: 8000,
    link: "/",
  },
  {
    id: 5,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    image: "/images/home/container-1/slide-5.jpg",
    pauseTime: 4000,
    link: "/",
  },
  {
    id: 6,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    image: "/images/home/container-1/slide-6.jpg",
    pauseTime: 7000,
    link: "/",
  },
];

export default carouselData;