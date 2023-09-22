import React from 'react';
import { styled } from '@mui/material';
import Packages from './Packages';
import Malkoha, { MalkohaProps } from '@containers/Malkoha';

export type Package = {
  id: string;
  name: string;
  price: string;
  tag?: string;
  features: string[];
};

interface WoodpeckerProps extends MalkohaProps {
  packages?: Package[];
};

const Woodpecker: React.FC<WoodpeckerProps> = ({
  packages,
  ...props
}) => {
  return (
    <Malkoha {...props}>
      <Packages packages={packages} />
    </Malkoha>
  )
};

export default styled(Woodpecker)(({ theme }) => ({
  height: '100%',
  width: '100%',
  maxWidth: theme.Breakpoints.values.xl,
  margin: '0 auto',
  padding: theme.Spaces.xxl + ' ' + theme.Spaces.md,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& > *': {
    textAlign: 'center',
  },

  '& hr': {
    alignSelf: 'center',
  },

  '& br': {
    display: 'none'
  },

  '& p > br': {
    display: 'block'
  }
}));