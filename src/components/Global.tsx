import React, { useRef, useState } from 'react';
import Video from './VideoBackground';
import { useMediaQuery } from 'react-responsive';

const cities = ['Los Angeles', 'Tel Aviv', 'Delhi', 'Sydney', 'Auckland'];

const Global = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [activeCity, setActiveCity] = useState(cities[0]);
	const citiesRef = useRef(cities);

	setTimeout(() => {
		const currentCityIndex = citiesRef.current.indexOf(activeCity);
		if (currentCityIndex === citiesRef.current.length - 1) {
			setActiveCity(cities[0]);
		} else {
			setActiveCity(cities[currentCityIndex + 1]);
		}
	}, 5000);

	return (
		<div className=" relative py-[107px] w-[100%] px-[35px] md:px-[50px] md:h-[100vh] flex flex-col items-center justify-center ">
			{!isMobile ? (
				<Video
					source="/global.mp4"
					className="covers"
					fallbackImage="globalfallback.svg"
				/>
			) : (
				<Video
					source="/Mobile.mp4"
					className="covers"
					fallbackImage="fallback.svg"
				/>
			)}

			<div className="flex flex-col items-center">
				<h1 className="font-[400] text-[40px] md:text-[128px] text-start leading-[60px] mb-[42px]">
					TIA IS GLOBAL
				</h1>
				<p>{activeCity}</p>
			</div>
		</div>
	);
};

export default Global;
