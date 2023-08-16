import { UtilityIconProps } from '@interfaces/SVGProps'
import React from 'react'

const SunIcon = (props: UtilityIconProps) => {
  return (
    <svg 
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='18.16863'
      height='18.16863' 
      viewBox='0 0 18.16863 18.16863'
      {...props}
    >
      <path id='star' d='M13.30957,9.08432A4.22526,4.22526,0,1,1,9.08429,4.85905h0A4.22529,4.22529,0,0,1,13.30957,9.08432Z' />
      <path id='glare' d='M9.08429,0a.63379.63379,0,0,1,.63379.63379v1.6901a.63379.63379,0,0,1-1.26758,0V.63379A.63381.63381,0,0,1,9.08429,0ZM2.04389,2.084a.63378.63378,0,0,1,.8954-.04008L4.817,3.76069a.63378.63378,0,1,1-.85533.93549h0L2.084,2.97939A.6338.6338,0,0,1,2.04388,2.084h0Zm14.08089,0a.63379.63379,0,0,1-.04014.89542h0L14.20693,4.69618a.6338.6338,0,0,1-.85536-.9355l1.87779-1.7168A.6338.6338,0,0,1,16.12478,2.084ZM0,9.08432a.63381.63381,0,0,1,.63379-.6338h1.6901A.63379.63379,0,0,1,2.32412,9.7181H.63379A.63379.63379,0,0,1,0,9.08432Zm15.21094,0a.63381.63381,0,0,1,.63379-.63379h1.69011a.63379.63379,0,0,1,.00023,1.26758H15.84473A.63381.63381,0,0,1,15.21094,9.08432Zm-1.87982,4.24656a.63382.63382,0,0,1,.89635,0l1.87771,1.878a.63378.63378,0,0,1-.89546.89715h0l-.00089-.00089-1.87771-1.878a.63372.63372,0,0,1,0-.89621ZM4.83764,13.331a.63383.63383,0,0,1,0,.89635l-1.8779,1.87788a.63377.63377,0,0,1-.89631-.89627h0l1.8779-1.878a.63377.63377,0,0,1,.8963,0Zm4.24665,1.88a.63381.63381,0,0,1,.63379.63379v1.69011a.63379.63379,0,0,1-1.26758,0V15.84473A.63381.63381,0,0,1,9.08429,15.21094Z' />
    </svg>
  )
}

export default SunIcon