import Image from 'next/image';
import bg from '../../public/bg.svg';
import frost from '../../public/frost.svg';
import Video from './VideoBackground';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {
	EffectCoverflow,
	Pagination,
	Keyboard,
	Scrollbar,
	Navigation,
	Autoplay,
} from 'swiper';

interface ProjectItemsProp {
	bgColor?: string;
	content: string;
	SubContent: string;
	icon?: string;
	btnColor?: string;
}

const ProjectItem: React.FC<ProjectItemsProp> = ({
	bgColor,
	btnColor,
	icon,
	content,
	SubContent,
}) => {
	return (
		<div
			style={{
				background: `url(${frost.src}), linear-gradient(168.07deg, #D9D9D9 6.78%, rgba(150, 144, 213, 0.05) 95.61%)`,
				backdropFilter: 'blur(29.4304px)',
				backgroundSize: 'cover',
			}}
			className={`h-[auto] w-1/1 border-[1px]  md:w-[505px] p-[10px] md:p-[30px] rounded-[13px]`}
		>
			<div
				className="rounded-13px md:px-30px h-full bg-custom-color"
				style={{ '--bg-color': bgColor } as React.CSSProperties}
			>
				<Image src={`/${icon}`} alt="star-icon" height={40} width={136} />
				<p className="text-[14px] md:text-[16px] font-[500] leading-[22px]">
					{content}
				</p>
				<p className="text-[14px] mt-[30px] md:text-[16px] font-[500] leading-[22px]">
					{SubContent}
				</p>

				<button
					className={`w-[186px] h-[60px] mt-[56px]   flex text-center justify-center gap-2 rounded-[64px]  text-[#fff] text-[14px] font-[600] leading-[18px] px-[40px] py-[21px] btn-custom-color`}
					style={{ '--bg-color': btnColor } as React.CSSProperties}
				>
					Learn More
					<Image
						src="/arrow-right.png"
						alt="arrow-icon"
						height={10}
						width={20}
					/>
				</button>
			</div>
		</div>
	);
};

const Project = () => {
	return (
		<>
			<div className="relative p-5 md:p-14 ">
				<Video
					source="/project.mp4"
					fallbackImage="projectfallback.svg"
					className="covers"
				/>
				<h1 className="font-bold text-[40px] text-center leading-[51px] mb-[64px]">
					OUR PROJECTS
				</h1>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1}
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
					keyboard={{
						enabled: true,
					}}
					breakpoints={{
						769: {
							slidesPerView: 3,
						},
					}}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: false,
					}}
					// scrollbar={true}
					navigation={true}
					pagination={{ clickable: true }}
					modules={[
						Keyboard,
						Scrollbar,
						Navigation,
						Pagination,
						Autoplay,
						EffectCoverflow,
					]}
					// modules={[EffectCoverflow, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<ProjectItem
							icon="tiasecure.svg"
							bgColor="#16242F"
							btnColor="#00C8CB"
							content="TiaSecure project provides comprehensive cyber security protection for all digital assets and personal devices. It safeguards against various cyber threats, including ransomware, spyware, and virus attacks. TiaSecure also ensures online banking, shopping security, protects children online, manages passwords, provides Dark Web Monitoring to prevent identity theft and offers a secure VPN and quick audit reports for smart contracts. It is the ultimate solution for all cyber security needs."
							SubContent=" Stay Protected"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProjectItem
							icon="tree.svg"
							bgColor="#144b0b"
							btnColor="#6FA519"
							content="Treeclan is a family-centric social media platform created by TIA. It allows users to create their own family tree and connect with relatives across generations. Users can also build a secure network with custom security circles, and enjoy a variety of exciting features such as family events, games, virtual shopping, and gifting options. Treeclan ensures the privacy and safety of users' families at all times."
							SubContent=" Connect with Loved Ones"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProjectItem
							icon="tiaexchange.svg"
							bgColor="#023D47"
							btnColor="#00B9D8"
							content="TiaXchange is a trustless method for connecting buyers and sellers, offering equitable involvement and governance for stakeholders. To ensure widespread adoption, TIA continuously refines the user experience, improves infrastructure and scaling mechanisms, and increases connections to centralized crypto and legacy financial institutions."
							SubContent="  Trade with Confidence"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProjectItem
							icon="tiamv.svg"
							bgColor="#4E1600"
							btnColor="#F9713C"
							content="TiaMV is a metaverse that combines all aspects of life in one platform, making it a perfect destination for family and friends to connect and explore. With its crypto-powered technology, users can enjoy seamless integration between NFT marketplaces and 3D virtual universes, and more exciting applications are being developed. TIAMV promises a safe, fun, and innovative virtual world experience. "
							SubContent="Experience the Metaverse"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Project;
