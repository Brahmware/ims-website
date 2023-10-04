import { Darshan } from "@datatypes/Darshan";
import { NextRequest, NextResponse } from "next/server";

const darshan: Darshan[] = [
  {
    id: '0be0dec4-c204-40b9-b086-8a7c6f94eb7f',
    title: 'Samrat Ashoka:<br /> The Great Mauryan',
    artist: 'Raja Ravi Varma',
    imageUrl: '/images/bharat-darshan/samrat-ashoka.jpg',
    description: 'Samrat Ashoka was the third ruler of the Mauryan Empire and was one of the greatest rulers in the history of India. He was the grandson of Chandragupta Maurya, founder of the Mauryan dynasty. He ruled over the Indian subcontinent from 268 BC to 232 BC. He was the first ruler who unified the whole of India under one administration. He was also known as Ashoka the Great.',
    link: "https://en.wikipedia.org/wiki/Ashoka",
  },
  {
    id: '0640fdac-8ce9-4bbe-bdb7-4e79ab796769',
    title: 'King Shantanu & Satyavati',
    artist: 'Raja Ravi Varma',
    imageUrl: '/images/bharat-darshan/king-shantanu-and-satyavati.jpg',
    description: 'Satyavati was the queen of the Kuru king, Shantanu of Hastinapur and the great-grandmother of the Pandava and Kaurava princes. She is also the mother of the seer Vyasa, author of the epic. She is sometimes identified with the goddess Jatputri.',
    link: "https://en.wikipedia.org/wiki/Satyavati",
  },
  {
    id: 'a0b0c0d0-e0f0-40b9-b086-8a7c6f94eb7f',
    title: 'Hungry Bengal',
    artist: 'Zainul Abedin',
    imageUrl: '/images/bharat-darshan/hungry-bengal.jpg',
    description: 'The Bengal famine of 1943 was a famine in the Bengal province of British India (now Bangladesh and eastern Bharat) during World War II. An estimated 2.1–3 million, out of a population of 60.3 million, died of starvation, malaria, or other diseases aggravated by malnutrition, population displacement, unsanitary conditions which was deliberately imposed on the Bengali populace by Winston Churchill.',
    link: "https://en.wikipedia.org/wiki/Bengal_famine_of_1943",
  },
  {
    id: 'b0c0d0e0-f0f0-40b9-b086-8a7c6f94eb7f',
    title: 'Bharat Mata',
    artist: 'Abanindranath Tagore',
    imageUrl: '/images/bharat-darshan/bharat-mata.jpg',
    description: 'Abanindranath Tagore was the principal artist and creator of the "Indian Society of Oriental Art". He was also the first major exponent of Swadeshi values in Indian art. He founded the influential Bengal school of art, which led to the development of modern Indian painting.He was also a noted writer, particularly for children.',
    link: "https://en.wikipedia.org/wiki/Abanindranath_Tagore",
  },
  {
    id: 'c0d0e0f0-0f0f-40b9-b086-8a7c6f94eb7f',
    title: 'The Third World’s Modern Origins',
    artist: 'Dadabhai Naoroji',
    imageUrl: '/images/bharat-darshan/the-third-worlds-modern-origins.jpg',
    description: 'How strange it is that the British looters do not see that after they themselves are the main cause of all destruction that ensues from droughts; that it is the drain of India’s wealth by them that lays at their own door the dreadful results of misery, starvation, and the death of millions.',
    link: "https://nickledanddimed.com/2021/10/18/the-third-worlds-modern-origins",
  },
];

// the req should have a query param called number which is a number and is optional.
// if the number is not provided, return one random darshans
// if the number is provided, return that many random darshans
// if the number is more than the number of darshans, return all the darshans

export async function GET(req: NextRequest) {
  return NextResponse.json(darshan);
}