import { Donation, DonationAmount } from "@datatypes/Donation";
import { NextRequest, NextResponse } from "next/server";

const donationAmounts: DonationAmount[] = [
  {
    currency: "₹",
    amount: 10,
    name: "Generous",
  },
  {
    currency: "₹",
    amount: 100,
    name: "Thoughtful",
  },
  {
    currency: "₹",
    amount: 1000,
    name: "Gracious",
  },
];

const donation: Donation = {
  videoUrl: "/videos/donation-panel/indian_market.mp4",
  slogan: "Your Impact<Br /> Starts Today!",
  title: "JOIN US",
  description: "By Joining Indian Media Syndicate you'll fund Indian Exploration, Scientific Communications, Real Life Entertainment, serving passionate Explorers around the world with scientific journalism that inspires, informs and entertains.<br /> <br />Also, you'll let educative content to reach everyone.",
  donationAmounts,
};

export async function GET(req: NextRequest) {
  return NextResponse.json(donation);
};