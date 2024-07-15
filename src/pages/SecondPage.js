import React, { useEffect, useState } from 'react'
import img3 from '../assests/img3.jpg'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.jpg'
import reddot from '../assests/reddot.png'
import blackdot from '../assests/blackdt.png'
import { Button } from 'flowbite-react'
import icon from '../assests/icon.png'
import arrow from '../assests/arrow.png'
const SecondPage = () => {
  const [isHovered, setIsHovered] = useState()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const [currentDot, setCurrentDot] = useState(0);
  const totalDots = 3;
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,
    img1,
    img2,
    img3,

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
    setCurrentDot((prevDot) => (prevDot + 1) % totalDots);
  
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 4
    );
    setCurrentDot((prevDot) => (prevDot - 1 + totalDots) % totalDots);
  };

  const displayedImages = isSmallScreen ? [images[currentIndex]] : images.slice(currentIndex, currentIndex + 4);

  return (
    
    <div className=' min-h-screen w-full flex justify-center  -mt-20 lg:mt-0'>
      <div className=" w-[100%] h-[80%] mt-  flex flex-col items-center  ">
        <div className=" w-full lg:w-[68%] h-full ml-0 lg:ml-[100px] flex mt-0 md:mt-32  flex-col items-center lg:items-start">
          <h1 className=' text-[20px] text-red-500 text-center '>WHAT WE DO</h1>
          <br />
          <div className=" w-full flex flex-col lg:flex-row justify-between items-center  ">
            <h1 className=' text-[30px] lg:text-[35px] font-bold  '>SERVICES PROVIDE <br /> FOR YOU</h1>
            <p className='  mt-3 text-md font-sans'>Lorem ipsum dolor sit amet consectetur,adipisicing elit.<br />
              Facilis laborum autem Voluptatem  ex nulla aliquam <br />
              labore tempore fugit dolores?</p>
          </div>

        </div>
        <div className=" flex flex-row gap-6   h-[320px] lg:w-[1091px] ml-0  mt-10 lg:ml-[268px] ">
          <div className="flex space-x-4 overflow-hidden w-full">
            {displayedImages.map((img, index) => (
              <div
                key={index}
                className="relative w-full sm:w-1/4 transition-all duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                onTouchStart={() => setIsHovered(index)}
                onTouchEnd={() => setIsHovered(null)}
              >
                <div
                  className={` bg-slate-300 lg:w-full w-[] transition-all duration-300 ease-in-out ${isHovered === index ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                  <img
                    src={img}
                    alt={`Slide ${currentIndex + index + 1} `}
                    className="block w-[600px] h-[600px] object-cover"
                  />
                </div>
                <div
                  className={`h-[343px] absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-75 transition-all duration-300 ease-in-out ${isHovered === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <div className=" flex text-white flex-col justify-center items-center gap-3">
                    <img src={icon} alt="" />
                    <h1 className=' font-semibold'>WEB DEVELOPMENT</h1>
                    <p className=' font-serif  text-center text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique nulla iure accusamus.</p>
                   <a href="fylehq.com" target='blank'>
                    <Button target='blank' className='  w-32 h-5 bg-white text-red-500 font-bold text-sm'>read more <img src={arrow} alt="" className=' w-5 h-2 ml-2 mt-2' /></Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-[375px]   lg:w-[1091px] md:w-[100%] flex flex-row justify-between relative -top-[206px] right-0  lg:-right-[128px]">
          <Button  className={`w-20 border ${currentDot === 0 ? 'bg-red-500 border-red-500' : 'bg-red-500 border-red-500' }`}  onClick={handlePrev}>Previous</Button>
          <Button  className={`w-20 border ${currentDot === 1 ? 'bg-red-500 border-red-500' : 'bg-red-500 border-red-500' }`} onClick={handleNext}>Next</Button>
        </div>
        <div className=" flex flex-row w-[60%] h-16 -ml-28 lg:ml-0  gap-6 mt- items-center">
          {[...Array(totalDots)].map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentDot === index ? 'bg-red-500' : 'bg-black'}`}
          ></div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default SecondPage