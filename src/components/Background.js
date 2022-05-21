import React from 'react'
import BgDesktopLight from "../../src/images/bg-desktop-light.jpg";
import BgDesktopDark from "../../src/images/bg-desktop-dark.jpg";
import BgMobileLight from "../../src/images/bg-mobile-light.jpg";
import BgMobileDark from "../../src/images/bg-mobile-dark.jpg";

function Background() {
  return (
<div className="absolute top-0 h-[35%]">
        <img src={BgDesktopLight} alt="" className="hidden mobile:block object-cover min-h-full"/>
        <img src={BgMobileLight} alt="" className="block mobile:hidden object-cover min-h-full"/>
      </div>
  )
}

export default Background