import React from 'react';
import { styled } from '@mui/material';
import { Package } from '../..';
import PackageTitle from './PackageTitle';
import PackageTag from './PackageTag';

interface UnitPackageProps extends React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactNode;
  gridTemplateRows?: string;
  packageInfo: Package;
};

const UnitPackage: React.FC<UnitPackageProps> = ({
  gridTemplateRows,
  packageInfo: {
    name,
    price,
    tag,
    features,
  },
  ...props
}) => {
  return (
    <ul {...props} >
      <PackageTitle name={name} price={price} />
      {
        features.map((item, index) => (
          <li key={index}>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))
      }
      {
        tag && (
          <PackageTag tag={tag} />
        )
      }
    </ul>
  )
};

export default styled(UnitPackage)(({ theme, gridTemplateRows }) => ({
  position: 'relative',
  width: theme.Breakpoints.values.xs,
  minHeight: '28rem',
  margin: '0 ' + theme.Spaces.md,
  backgroundColor: theme.palette.background.default,
  borderRadius: '1.618rem',
  boxShadow: theme.shadows[2],
  transition: theme.Transitions.createTransition({
    property: 'box-shadow',
    duration: 'short',
    easing: 'easeOut',
  }),

  display: 'grid',
  alignItems: 'center',
  gridTemplateRows: gridTemplateRows,
  gridTemplateColumns: '1fr',

  '& > li': {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '0.25px solid ' + theme.palette.divider,
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },

  '&:hover': {
    boxShadow: theme.shadows[4],
    '& .package__title, & .package__tag': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  '@media (max-width: 1400px)': {
    margin: theme.Spaces.xl,
  },

  [theme.Breakpoints.down('sm')]: {
    margin: theme.Spaces.xl + ' 0',
  },
}));