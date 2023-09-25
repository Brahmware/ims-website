export interface CarouselData {
  id: number;
  tagline?: string;
  title: string;
  description: string;
  video: string;
  bluredImage?: string;
  pauseTime?: number;
  link: string;
}

const carouselData: CarouselData[] = [
  {
    id: 1,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    video: "/videos/home/container-1/slide-1.webm",
    bluredImage: "/images/home/container-1/slide-1-blur.png",
    pauseTime: 30000,
    link: "/",
  },
  {
    id: 2,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    video: "/videos/home/container-1/slide-2.webm",
    bluredImage: "/images/home/container-1/slide-2-blur.png",
    pauseTime: 10000,
    link: "/",
  },
  {
    id: 3,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    video: "/videos/home/container-1/slide-3.webm",
    bluredImage: "/images/home/container-1/slide-3-blur.png",
    pauseTime: 15000,
    link: "/",
  },
  {
    id: 4,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    video: "/videos/home/container-1/slide-4.webm",
    bluredImage: "/images/home/container-1/slide-4-blur.png",
    pauseTime: 10000,
    link: "/",
  },
  {
    id: 5,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    video: "/videos/home/container-1/slide-5.webm",
    bluredImage: "/images/home/container-1/slide-5-blur.png",
    pauseTime: 20000,
    link: "/",
  },
  {
    id: 6,
    tagline: "FOR INDIA",
    title: "Discover Bharat",
    description: "This is an Indian family of informational, educational and entertainment-oriented Television, Applications and Websites offering value to how Education is developed and accessed by Global Societies.",
    video: "/videos/home/container-1/slide-6.webm",
    bluredImage: "/images/home/container-1/slide-6-blur.png",
    pauseTime: 8000,
    link: "/",
  },
];

export default carouselData;