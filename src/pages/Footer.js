import React from 'react'
import comma from '../assests/comma.png'
import logo from '../assests/logo.png'
const Footer = () => {
    return (
        <div className='  w-full flex flex-col items-center justify-center red-500 mt-20 '>
            <div className=" w-[100%] h-[80%] mt-  flex flex-col items-center  ">
                <div className=" w-full flex flex-col justify-center items-center mt-">
                    <h1 className=' text-[20px] font-semibold mt-2 text-red-500 '>CLIENT'S FEEDBACK</h1>
                    <h1 className=' text-[30px] lg:text-[35px] font-bold   mt-2'>PEOPLE SAY'S ABOUT US !</h1>
                    <img src={comma} alt="" className=' relative top-[32px] right-[232px] h-11'/>
                    <h1  className='  text-md font-sans font-medium text-center mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Ipsa, aspernatur
                    <br /> nobis? Sint sapie  deleniti cumque  laudantium eum consequatur
                     </h1>
                     <h1 className=' text-[16px] font-bold mt-2 text-red-500 '>CLIENT'S FEEDBACK <span className=' text-gray-500 text-[14px] font-light'>- COO, AMERIMAR ENTERPISES, INS.</span></h1>
                </div>
            </div>
            <div className=" w-full bg-red-500 mt-20  flex items-center justify-center bottom-0 h-[240px]">
            <img src={logo} alt="" className=' h-10' />
            </div>
        </div>
    )
}

export default Footer