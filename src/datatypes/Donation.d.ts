type DonationAmount = {
  currency: string;
  amount: number;
  name: string;
};

export type Donation = {
  videoUrl: string;
  slogan: string;
  title: string;
  description: string;
  donationAmounts: DonationAmount[];
};