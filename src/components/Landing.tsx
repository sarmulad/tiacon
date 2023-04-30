import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Video from "./VideoBackground";
import YouTube from 'react-youtube';


const Landing = ()=>{
    const videoId = '7qiJ-E88mbg';
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return(      
       <div className="">
          {!isMobile ? <Video source="/web.mp4"  fallbackImage="fallback.svg"/> :<Video source="/Mobile.mp4"  fallbackImage="mobilefallback.svg"/>}
          <div className='md:w-[1300px]  px-[35px] mt-[50px] md:mt-[0px] md:px-[0]'>
            <div className='flex flex-col gap-[32px] md:gap-[0px] md:px-[50px]'>
                <div className="md:flex justify-between items-center gap-10">
                    <div className="w-1/1 md:w-1/2 flex flex-col flex-1">
                        <h4 className="font-bold text-[38px] md:text-[60px] leading-[51px] md:leading-[73px]  text-left md:mt-[60px] mb-[32px] md:mb-[0px] animated-text">Be part of a groundbreaking initiative with TIA <br/></h4>
                        <p className="text-[16px] md:text-[20px] font-medium max-w-[350px] md:w-[80%] text-left  md:my-[30px] leading-[20px] md:leading-[30px]">The first blockchain project to seamlessly integrate social media, cybersecurity,metaverse and crypto exchange.</p>
                        <div className="flex justify-start mt-[32px] gap-7">
                            <Link href="/#">
                              <button className=" w-[128px]  md:w-[186px] h-[44.22px] md:h-[60px] mb-[56px] border-[1px] border-[#38DBFF]  flex text-center justify-center rounded-[64px]  text-[#FFF] text-[11px] md:text-[14px] font-[500] leading-[18px] md:px-[40px] px-[20px] md:py-[21px] py-[10.58px] ">
                               JOIN WAITLIST
                                </button>
                            </Link>
                            <Link href="/#">
                                <button className=" w-[128px]  md:w-[186px] h-[44.22px] md:h-[60px] mb-[56px] border-[1px] border-[#38DBFF]  flex text-center justify-center rounded-[64px]  text-[#000] text-[11px] md:text-[14px] font-[500] leading-[18px] md:px-[40px] px-[20px] md:py-[21px] py-[10.58px] gradient-white">
                                OUR PROJECT
                                </button>
                            </Link>
                            
                        </div>

                    </div>
                    <div className=" flex-1">
                      <div className="video">
                        <YouTube videoId={videoId} className="hidden md:flex" />
                      </div>
                        {/* <Image src="/videoframe.svg" width={486} height={286} alt="icon" className="hidden md:block" /> */}
                        <div 
                         style={{
                            background: " rgba(101, 180, 193, 0.17)",
                            border: "0.4px solid #65B4C1",
                            borderRadius: "12px",
                            // width:"100%"
                         }}
                        className="flex p-2 md:gap-3 justify-between h-[82px] md:p-5 md:mt-[60px]  ">
                        <Image src="/fbgrey.svg" width={40} height={40} alt="facebook-icon" />
                        <Image src="/twtgrey.svg" width={40} height={40} alt="twitter-icon" />
                        <Image src="/telgrey.svg" width={40} height={40} alt="telegram-icon" />
                        <Image src="/youtgrey.svg" width={40} height={40} alt="youtube-icon" />
                        <Image src="/iggrey.svg" width={40} height={40} alt="instagram-icon" />
                        <Image src="/linkgrey.svg" width={40} height={40} alt="linkedin-icon" /> 
                        </div>
                    </div>
                </div>
                
            </div>
         </div>
        </div>     

    )
}


export default Landing;