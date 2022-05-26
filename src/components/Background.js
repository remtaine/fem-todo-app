import React from 'react'
import BgDesktopLight from "../../src/images/bg-desktop-light.jpg";
import BgDesktopDark from "../../src/images/bg-desktop-dark.jpg";
import BgMobileLight from "../../src/images/bg-mobile-light.jpg";
import BgMobileDark from "../../src/images/bg-mobile-dark.jpg";

function Background() {
  return (
<div className="absolute top-0 h-2/5">
        <div className='w-full h-full block dark:hidden'>
          <img src={BgDesktopLight} alt="" className="hidden mobile:block object-cover min-h-full"/>
          <img src={BgMobileLight} alt="" className="block mobile:hidden object-cover min-h-full"/>
        </div>
        <div className='w-full h-full hidden dark:block'>
          <img src={BgDesktopDark} alt="" className="hidden mobile:block object-cover min-h-full"/>
          <img src={BgMobileDark} alt="" className="block mobile:hidden object-cover min-h-full"/>
        </div>
      </div>
  )
}

export default Background