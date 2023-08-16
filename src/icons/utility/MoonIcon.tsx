import { UtilityIconProps } from '@interfaces/SVGProps'
import React from 'react'

const MoonIcon = (props: UtilityIconProps) => {
  return (
    <svg  
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink' 
      width='18.16863' 
      height='18.16863' 
      viewBox='0 0 18.16863 18.16863'
      {...props}
    >
      <path id='satellite' d='M9.08392,15.20921a6.12494,6.12494,0,0,0,6.12491-6.1249c0-.2834-.42477-.33026-.57133-.08771A3.98161,3.98161,0,1,1,9.17164,3.53071c.24254-.14654.19568-.57131-.08772-.57131a6.12491,6.12491,0,0,0,0,12.24981Z' />
    </svg>
  )
}

export default MoonIcon