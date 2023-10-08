import React from 'react';
import { styled } from '@mui/material';
import { DonationAmount } from '@datatypes/Donation';
import TitleText from '@components/Texts/TitleText';
import IconButton from '@components/Button/IconButton';

const StyledTitleText = styled(TitleText)(({ theme }) => ({
  gridColumn: '1 / 2',
  gridRow: '1 / 2',
  justifySelf: 'start',
  alignSelf: 'center',
  fontSize: '1.125rem',
  lineHeight: '1.25rem',
}));

const PriceText = styled('span')(({ theme }) => ({
  gridColumn: '1 / 2',
  gridRow: '2 / 3',
  justifySelf: 'start',
  alignSelf: 'center',
}));

const DonateButton = styled(IconButton)(({ theme }) => ({
  gridColumn: '2 / 3',
  gridRow: '1 / 3',
  height: '100%',
  aspectRatio: '1 / 1',
  padding: 0,
  margin: 0,
  borderRadius: 0,
  transform: `translateX(${theme.Spaces.xl})`,
}));

interface ActionLiProps extends React.HTMLAttributes<HTMLLIElement> {
  key: number;
  donationAmount: DonationAmount;
};

const ActionLi: React.FC<ActionLiProps> = ({
  key,
  donationAmount: {
    name,
    currency,
    amount,
  },
  ...props
}) => {
  return (
    <li
      key={key}
      {...props}
    >
      <StyledTitleText>{name}</StyledTitleText>
      <PriceText>
        {currency}
        {amount}
      </PriceText>
      <DonateButton />
    </li>
  )
};

export default styled(ActionLi)(({ theme }) => ({
  gridColumn: '1 / 2',
  gridRow: '1 / 2',
  backgroundColor: theme.palette.background.default,
  padding: theme.Spaces.md,
  marginRight: theme.Spaces.md,

  display: 'grid',
  gridTemplateColumns: 'auto 4rem',
  gridTemplateRows: 'auto auto',
}));