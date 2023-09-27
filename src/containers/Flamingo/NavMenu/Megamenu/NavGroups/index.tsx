import React from 'react';
import { NavGroupsProps } from '@interfaces/NavGropusProps';
import { styled, useMediaQuery } from '@mui/material';
import Title from './Title';
import { useNavHoverContext } from '@helpers/NavHoverContext';
import GroupCard from './GroupCard';
import NavList from './NavList';
import { useMegamenuStateContext } from '@helpers/MegamenuStateProvider';


interface NavgroupProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  active?: boolean;
  show?: boolean;
};

const Navgroup = styled('ul')<NavgroupProps>(({ theme, active, show }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.Spaces.md,
  margin: theme.Spaces.lg,
  minWidth: '19.75em',
  height: active ? '10.75rem' : '3rem',

  [theme.Breakpoints.down('tall')]: {
    height: show ? '10.75rem' : '3rem',
    justifyContent: 'center',
  },

  transition: theme.Transitions.createTransition([
    {
      property: 'height',
      duration: 'medium'
    },
    {
      property: 'width',
      duration: 'medium'
    },
    {
      property: 'border-radius',
      duration: 'medium'
    },
  ]),

  '& .nav__group-card': {
    transform: `translateX(-1px) ${!active ? '!important' : ''}`,
  },

  '&:hover': {
    '& .nav__group-card': {
      transform: `translateX(${theme.Spaces.xxs})`,
    },
  },

  [theme.Breakpoints.down('navGroupTablet')]: {
    width: '100%',
    margin: `0 ${theme.Spaces.lg}`,
    height: show ? '10.75rem' : '3rem',

    '&:hover': {
      '& .nav__group-card': {
        transform: `translateX(-1px)`,
      },
    },
  },

  [theme.Breakpoints.down('navGroupPhablet')]: {
    width: '100%',
    margin: `0 ${theme.Spaces.md}`,
    height: show ? '10.75rem' : '3rem',
  },

}));

const NavGroups = ({ title, videoUrl, items }: NavGroupsProps) => {

  const { setCurrentUrl, resetCurrentUrl } = useNavHoverContext();
  const matchesTablet = useMediaQuery((theme: any) => theme.Breakpoints.down('tall'));
  const { activeMenu, setActiveMenu } = useMegamenuStateContext();
  const [show, setShow] = React.useState(false);

  const handleMouseEnter = () => {
    setCurrentUrl(videoUrl);
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLUListElement>) => {
    if (show) {
      return setActiveMenu(null as unknown as HTMLUListElement);
    };
    setActiveMenu(event.currentTarget);
  };

  const navgroupRef = React.useCallback((node: HTMLUListElement) => {
    if (node !== null) {
      if (activeMenu === node) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [activeMenu]);

  return (
    <Navgroup
      ref={navgroupRef}
      onClick={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={resetCurrentUrl}
      active={!matchesTablet}
      show={show}
    >
      <GroupCard >
        <Title>
          {title}
        </Title>
        <NavList items={items} />
      </GroupCard>
    </Navgroup>
  )
};

export default NavGroups;