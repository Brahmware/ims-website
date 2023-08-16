import { SocialMediaIconProps } from '@interfaces/SVGProps'
import React from 'react'

const LinkedinLogo = (props: SocialMediaIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-name='Linkedin Logo'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      {...props}
    >
      <defs>
        <style>
          {`
            .a1b9f681-a81e-48bf-a9de-648899f4d4cb {
              fill: #069;
            }
          `}
        </style>
      </defs>
      <path className="a1b9f681-a81e-48bf-a9de-648899f4d4cb" d="M17.94946.67169H2.05054A1.35855,1.35855,0,0,0,.67169,2.00812V17.99231a1.35819,1.35819,0,0,0,1.37885,1.336H17.94946a1.358,1.358,0,0,0,1.37885-1.33618V2.00812A1.35836,1.35836,0,0,0,17.94946.67169ZM6.34125,16.28479H3.5495V7.88556H6.34125ZM4.94592,6.739l-.00018-.00006H4.92767a1.45513,1.45513,0,1,1,.03681-2.90228A1.4557,1.4557,0,1,1,4.94592,6.739Zm11.46234,9.54584h-2.7915V11.79193c0-1.12927-.40424-1.89941-1.41418-1.89941a1.5279,1.5279,0,0,0-1.4325,1.02112,1.91233,1.91233,0,0,0-.092.68115v4.69H7.88654l-.00007.00031s.03669-7.61133.00025-8.3993h2.79162V9.07489A2.772,2.772,0,0,1,13.19446,7.6886c1.83673,0,3.2138,1.2005,3.2138,3.78033Z" />
    </svg>

  )
}

export default LinkedinLogo