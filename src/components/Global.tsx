import React from 'react'
import Video from './VideoBackground'
import { useMediaQuery } from "react-responsive";

const Global = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
   
  return (
    <div className=" relative py-[107px] w-[100%] px-[35px] md:px-[50px] md:h-[100vh] flex flex-col items-center justify-center ">
          {!isMobile ? <Video source="/global.mp4"  fallbackImage="globalfallback.svg"/> :<Video source="/Mobile.mp4"  fallbackImage="fallback.svg"/>}

              <div className="flex flex-col items-center">
                <h1 className="font-[400] text-[40px] md:text-[128px] text-start leading-[60px] mb-[42px]">TIA IS GLOBAL</h1>
                <p>Los Angeles, Tel Aviv, Delhi, Sydney, Auckland</p>
              </div>
            </div>
  )
}

export default Global