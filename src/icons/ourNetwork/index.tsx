import React from 'react';
import { OurNetworkIconProps } from '@interfaces/SVGProps';
import IMSHistory from './IMSHistory';
import IMSLife from './IMSLife';
import IMScience from './IMScience';
import PopNews from './PopNews';
import WorldTv from './WorldTv';


const OurNetwork: Record<string, React.FC<OurNetworkIconProps>> = {
  IMSHistory,
  IMSLife,
  IMScience,
  PopNews,
  WorldTv
};

export default OurNetwork;