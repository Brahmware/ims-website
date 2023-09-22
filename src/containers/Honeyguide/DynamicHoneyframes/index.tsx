import React from 'react';
import { Options, Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import IMSHistory from '@icons/ourNetwork/IMSHistory';
import IMSLife from '@icons/ourNetwork/IMSLife';
import IMScience from '@icons/ourNetwork/IMScience';
import PopNews from '@icons/ourNetwork/PopNews';
import WorldTv from '@icons/ourNetwork/WorldTv';
import { styled } from '@mui/material';
import Link from 'next/link';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { SplideInstance } from '@interfaces/SplideInterface';
import Observer from '@components/Observer';
import { ContentType } from '..';
import OurNetwork from '@icons/ourNetwork';


const StyledLink = styled(Link)(({ theme }) => ({
  height: 'max-content',
}));

const StyledSplidetrack = styled(SplideTrack)(({ theme }) => ({

  '&.splide__track': {
    Direction: 'rtl',
  },

  height: '100%',
  width: '100%',
  justifyContent: 'space-between',

  '& .splide__list': {
    height: '100%',
    width: '100%',
  },

  '& .splide__slide': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 ' + theme.Spaces.hecto,

    [theme.Breakpoints.down('sm')]: {
      padding: '0 ' + theme.Spaces.xxl,
    },

    [theme.Breakpoints.down('xs')]: {
      padding: '0 ' + theme.Spaces.xl,
    },
  },
}));

const options: Options = {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  arrows: false,
  autoHeight: false,
  autoWidth: true,
  pagination: false,
  direction: 'ltr',
  autoScroll: {
    pauseOnFocus: false,
    rewind: false,
    speed: 0.5
  },
};

interface DynamicHoneyframesProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  dynamicContent?: ContentType[];
};

const DynamicHoneyframes: React.FC<DynamicHoneyframesProps> = ({ dynamicContent, ...props }) => {

  const [splide, setSplide] = React.useState<SplideInstance | null>(null);
  const splideRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (splideRef.current) {
      setSplide(splideRef.current.splide);
    }
  }, [splideRef]);

  return (
    <Observer
      onIntersect={() => splide?.Components.AutoScroll.play()}
      onNoIntersect={() => splide?.Components.AutoScroll.pause()}
    >
      <Splide
        className={props.className}
        options={options}
        ref={splideRef}
        hasTrack={false}
        extensions={{ AutoScroll }}
      >
        <StyledSplidetrack>
          {
            dynamicContent?.map((content, index) => {

              const IconComponent = OurNetwork[content.id || 'IMSLife'];
              return (
                <SplideSlide
                  key={index}
                  style={{ height: '100%' }}
                >
                  <StyledLink
                    href={content.link || '/'}
                    aria-label={content.title || ''}
                  >
                    <IconComponent />
                  </StyledLink>
                </SplideSlide>
              )
            })
          }
        </StyledSplidetrack>
      </Splide>
    </Observer>
  )
};

export default styled(DynamicHoneyframes)(({ theme }) => ({
  height: '100%',
  width: '100%',
}));