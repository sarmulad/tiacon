
const NewsLetter = ()=>{
    return(
        <div className=" bg-[#0A0F20] px-[25px] py-[120px] md:p-[100px] flex flex-col items-center" id="contact">
            <div className="bg-[#0D1631] rounded-[48px] w-full md:max-w-[956px]  md:max-h-[348px] p-5 md:p-14 flex flex-col justify-center items-center ">
                <h4 className="text-[24px] mb-3 md:text-[48px] font-bold text-[#fff]">Sign Up for Newsletter</h4>
                <p className="text-[12px] md:text-[16px] text-[#D9D9D9] font-medium text-center leading-[22px]">Stay up-to-date with Tia, subscribe to our newsletter</p>
                <form className="mt-[40px] w-[95%] md:w-[80%]">
                    <div className="gradient-button p-[2px] h-[72px]  rounded-[64px] flex items-center">
                     <div className="relative rounded-[64px] flex bg-[#0D1631] w-full">
                        <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className=" text-[16px] h-[71px] bg-[transparent] w-full focus:outline-none pl-10"
                        />
                        <div className="absolute right-[12px] h-full flex items-center ">
                        <button className="w-[120px] md:w-[179px] h-[48px] flex justify-center items-center rounded-[64px]  text-[#fff] text-[14px] font-normal leading-[18px] px-[30px] py-[21px] gradient-button">
                        Subscribe
                        </button>
                        </div>
                    </div>
                    </div>
                 
               </form>
            </div>
        </div>
    )
}

export default NewsLetter;