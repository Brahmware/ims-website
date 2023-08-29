import React from 'react';
import { NavGroupsProps } from '@interfaces/NavGropusProps';
import { styled, useMediaQuery } from '@mui/material';
import Title from './Title';
import { useNavHoverContext } from '@helpers/NavHoverContext';
import GroupCard from './GroupCard';
import NavList from './NavList';
import { useMegamenuStateContext } from '@helpers/MegamenuStateProvider';
import { MediaWhiteNoiseSrc } from '@utils/const';


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
  },

  transition: theme.Transitions.createTransition([
    {
      property: 'height',
      duration: 'longest'
    },
    {
      property: 'border-radius',
      duration: 'longest'
    },
  ]),

  '& .nav__group-card': {
    transform: `translateX(0) ${!active ? '!important' : ''}`,
  },

  '&:hover': {
    '& .nav__group-card': {
      transform: `translateX(${theme.Spaces.xxs})`,
    },
  },

  [theme.Breakpoints.down('navGroupTablet')]: {
    width: '100%',
    margin: `0 ${theme.Spaces.lg}`,

    '&:hover': {
      '& .nav__group-card': {
        transform: `translateX(0)`,
      },
    },
  },


}));

const NavGroups = ({ index, title, videoUrl, items }: NavGroupsProps) => {

  const { setCurrentUrl } = useNavHoverContext();
  const matchesTablet = useMediaQuery((theme: any) => theme.Breakpoints.down('tall'));
  const { activeMenu, setActiveMenu } = useMegamenuStateContext();
  const [show, setShow] = React.useState(false);

  const handleMouseEnter = () => {
    setCurrentUrl(videoUrl);
  };

  const handleMouseLeave = () => {
    setCurrentUrl(MediaWhiteNoiseSrc);
  };

  const handleMouseClick = (event: React.MouseEvent<HTMLUListElement>) => {
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
      key={index}
      ref={navgroupRef}
      onClick={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      active={!matchesTablet || false}
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