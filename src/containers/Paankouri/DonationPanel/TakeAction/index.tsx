import React from 'react';
import { Donation, DonationAmount } from '@datatypes/Donation';
import { Box, styled } from '@mui/material';
import ActionLi from './ActionLi';

interface TakeActionProps extends React.HTMLAttributes<HTMLUListElement> {
  donationAmounts: Donation['donationAmounts'];
};

const TakeAction: React.FC<TakeActionProps> = ({
  donationAmounts,
  ...props
}) => {
  return (
    <ul {...props}>
      {
        donationAmounts?.map((donationAmount, index) => (
          <ActionLi
            key={index}
            sx={{ gridRow: `${index + 1} / ${index + 2}` }}
            donationAmount={donationAmount}
          />
        ))
      }
      <ActionLi
        key={donationAmounts?.length}
        sx={{ gridRow: `${donationAmounts?.length + 1} / ${donationAmounts?.length + 2}` }}
        donationAmount={{
          name: 'Custom',
          currency: '€',
          amount: 0,
        }}
      />
    </ul>
  )
}

export default styled(TakeAction)(({ donationAmounts, theme }) => ({
  gridColumn: '3 / 4',
  gridRow: '6 / 7',
  width: '100%',
  height: '100%',

  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: `repeat(${donationAmounts?.length + 1}, minmax(2.5rem, auto))`,
  gridGap: theme.Spaces.md,
}));