import Image from "next/image"

interface FeatureProps {
    title:string,
    content:string,
    icon?:string,
    position?:string,
    

}

const FeatureCard:React.FC<FeatureProps> = ({position, title, icon, content}) => {
    return (
        <div className={`bg-[#1B223A] md:${position} flex flex-col justify-center items-center md:h-[336px] w-1/1 border-t-[1px] border-[#f1f1f1] md:w-1/3 p-[30px] rounded-3xl item md:odd:mt-[-100px]`}>
            <Image src={`/${icon}`} alt="star-icon" height={50} width={50} />
            <h4 className="font-bold text-[20px] md:text-[24px] mb-[16px] mt-[20px] text-center gradient-text">{title}</h4>
            <p className=" text-[#706F74] font-[500] text-[14px] text-center md:text-[16px] leading-[22px]">{content}</p>
        </div>
    )
}
 
const Features = () => {
    return(
        <div className="bg-[#0A0F20] py-[107px] px-[35px] md:px-[50px] flex flex-col items-center">
                <h1 className="font-bold text-[40px] text-center leading-[51px] mb-[64px] md:mb-[200px]">FEATURES</h1>
                <div className=" relative flex flex-col md:flex-row w-full gap-10 max-w-[1000px] features-card} mb-[30px]">
                    <FeatureCard 
                        icon = 'xch.svg'
                        title="Instant Exchange"
                        content="TIA Team is building a B2B exchange where user can lock their price for 48 Hrs before exchanging them to Fiat."
                    />
                    <FeatureCard 
                        icon = 'cash.svg'
                        title="Instant Cashout"
                        position= "absolute"
                        content="Cash out your digital assets quickly and easily, with minimal transaction fees."
                    />
                    <FeatureCard 
                        icon = 'key.svg'
                        title="Safe & Secure"
                        content="Keep your digital assets safe and secure in your own wallet, with all transactions recorded and publicly available for added transparency."
                    />
                </div>

                <div className="flex flex-col md:flex-row md:mt-6 w-full gap-10 max-w-[1000px] features-card mb-[30px]">
                    <FeatureCard 
                        icon = 'adt.svg'
                        title="Advertising Platform"
                        content="Connect with a vast network of social media platforms and reach your target audience with ease."
                    />
                    <FeatureCard 
                        icon = 'fraud.svg'
                        title="Anti-Fraud Mechanisms"
                        content="Stay protected from fraud and invalid ad traffic with TIA's advanced technical mechanisms."
                    />
                    <FeatureCard 
                        icon = 'sec.svg'
                        title="Ultimate Digital Security"
                        content="Enjoy bank-level security to protect your mobile device and digital assets."
                    />
                </div>

                <div className="flex flex-col md:flex-row md:mt-6 w-full gap-10 max-w-[1000px] features-card}">
                    <FeatureCard 
                        icon = 'penny.svg'
                        title="Every Penny Counts"
                        content="Get detailed reports on your advertising spending to ensure every penny is well-spent. "
                    />
                    <FeatureCard 
                        icon = 'rel.svg'
                        title="Reliable Exchange"
                        content="Trust in TIA's exchange for fast and reliable trading of digital assets"
                    />
                    <FeatureCard 
                        icon = 'love.svg'
                        title="Connecting Lives"
                        content="Enjoy bank-level security to protect your mobile device and digital assets."
                    />
                </div>

            </div>
    )
}


export default Features;