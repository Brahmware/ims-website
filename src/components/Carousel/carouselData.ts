export interface CarouselData {
  id: number;
  title: string;
  description: string;
  image: string;
  pauseTime?: number;
  link: string;
}

const carouselData : CarouselData[] = [
  {
    id: 1,
    title: "First Slide",
    description: "This is the first slide",
    image: "/images/home/container-1/slide-1.jpg",
    pauseTime: 5000,
    link: "/",
  },
  {
    id: 2,
    title: "Second Slide",
    description: "This is the second slide",
    image: "/images/home/container-1/slide-2.jpg",
    pauseTime: 10000,
    link: "/",
  },
  {
    id: 3,
    title: "Third Slide",
    description: "This is the third slide",
    image: "/images/home/container-1/slide-3.jpg",
    pauseTime: 5000,
    link: "/",
  },
  {
    id: 4,
    title: "Fourth Slide",
    description: "This is the fourth slide",
    image: "/images/home/container-1/slide-4.jpg",
    pauseTime: 8000,
    link: "/",
  },
  {
    id: 5,
    title: "Fifth Slide",
    description: "This is the fifth slide",
    image: "/images/home/container-1/slide-5.jpg",
    pauseTime: 4000,
    link: "/",
  },
  {
    id: 6,
    title: "Sixth Slide",
    description: "This is the sixth slide",
    image: "/images/home/container-1/slide-6.jpg",
    pauseTime: 7000,
    link: "/",
  },
];

export default carouselData;