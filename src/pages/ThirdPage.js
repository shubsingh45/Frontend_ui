import React, { useState } from 'react'
import target from '../assests/target.png'
import speed from '../assests/speed.png'
import lock from '../assests/lock.png'
import wheel from '../assests/wheel.png'
import img5 from '../assests/img5.jpg'
import like from '../assests/like1.png'
import time from '../assests/time.png'
import tick from '../assests/tick.png'
import llll from '../assests/llll.png'
import dish1 from '../assests/dish1.jpg'
import dish2 from '../assests/dish2.jpg'
const ThirdPage = () => {
  const [img, setImg] = useState(img5)

  // const handelFImage = () =>{
  // }
  // const handel2ndImage = () =>{
  // }
  // const handel3rdImage = () =>{
  // }
  const [fColor, setFColor] = useState('bg-red-500')
  const [sColor, setSColor] = useState('bg-white   ')
  const [tColor, setTColor] = useState('bg-white   ')
  
  const handel1st = () =>{
    setImg(img5)
    setFColor('bg-red-500')
    setSColor('bg-white')
    setTColor('bg-white   ')
  }
  const handel2nd = () =>{
    setImg(dish1)
    setFColor('bg-white ')
    setSColor('bg-red-500 ')
    setTColor('bg-white')
    
  }
  const handel3rd = () =>{
    setFColor('bg-white ')
    setTColor('bg-red-500 ')
    setSColor('bg-white')
    setImg(dish2)
    
  }
  

  return (
    <div className=' min-h-screen w-full flex justify-center  '>
      <div className=" w-full lg:w-[60%] lg:h-[80%] flex flex-col justify-center items-center mt-16 ">
        <h1 className=' text-[20px] font-semibold mt-2 text-red-500 '>WHY CHOOSE US</h1>
        <h1 className='text-[35px] font-bold   mt-2'>WHY YOU ARE BEST</h1>
        <div className=" flex flex-col lg:flex-row md:flex-row  items-center mt-16 gap-6">
          <div className=" flex flex-col items-center  w-[300px] h-[200px] lg:w-[189px] lg:h-[163px] md:w-[185px] md:h-[153px]">
            <img src={target} alt="" className=' h-[63px]' />
            <h1 className='text-[16px] font-semibold mt-2'>Clarified Vision & Target</h1>
            <p className='text-sm font-sans mt-2 text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, est! Quo.</p>
          </div>
          <div className="flex flex-col items-center  w-[300px] h-[200px] lg:w-[189px] lg:h-[163px] md:w-[185px] md:h-[153px]">
            <img src={speed} alt="" className=' h-[63px]' />
            <h1 className=' text-[16px] font-semibold mt-2'>Clarified Vision & Target</h1>
            <p className='text-sm font-sans mt-2 text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, est! Quo.</p>
          </div>
          <div className="flex flex-col items-center  w-[300px] h-[200px] lg:w-[189px] lg:h-[163px] md:w-[185px] md:h-[153px]">
            <img src={lock} alt="" className=' h-[63px]' />
            <h1 className=' text-[16px] font-semibold mt-2'>Clarified Vision & Target</h1>
            <p className='text-sm font-sans  mt-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, est! Quo.</p>
          </div>
          <div className="flex flex-col items-center w-[300px] h-[200px] lg:w-[189px] lg:h-[163px] md:w-[185px] md:h-[153px]">
            <img src={wheel} alt="" className=' h-[63px]' />
            <h1 className=' text-[16px] font-semibold mt-2'>Clarified Vision & Target</h1>
            <p className='text-sm font-sans mt-2 text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, est! Quo.</p>
          </div>

        </div>
        <div className=" flex justify-center items-center flex-col mt-20 ">
          <h1 className=' text-[20px] font-semibold mt-2 text-red-500 '>OUR PROJECTS</h1>
          <h1 className='text-[35px] font-bold   mt-2'>WHY YOU ARE BEST</h1>
          <div className=" flex lg:flex-row w-full  items-center flex-col-reverse gap-2 mt-16">
            <div className=" w-[100%]  p-2 flex lg:w-[65%] items-center  justify-center">
              <img src={img} alt="" className='h-[300px] lg:h-[378px] lg:w-[558px] md:w-[90%] md:h-[408px]' />
            </div>
            <div className=" w-full lg:w-[35%] lg:h-[378px] p-1 flex lg:flex-col flex-row justify-between bg-neutral-100 gap-1 ">
              <div className={`${fColor}  w-full flex flex-col justify-center items-center h-full cursor-pointer`} onClick={handel1st}>
                <h1 className=' text-[16px] font-semibold mt-2'>indian'hots</h1>
                <p className='text-sm font-sans mt-2  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Rerum dolorum enim voluptatibus itaque expedita!</p>
              </div>
              <div className={`${sColor}   w-full flex flex-col justify-center items-center h-full cursor-pointer`} onClick={handel2nd}>
                <h1 className=' text-[16px] font-semibold mt-2'>indian'hots</h1>
                <p className='text-sm font-sans mt-2  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Rerum dolorum enim voluptatibus itaque expedita!</p>
              </div>
              <div className={`{${tColor} w-full flex flex-col justify-center items-center h-full cursor-pointer`} onClick={handel3rd}>
                <h1 className=' text-[16px] font-semibold mt-2'>indian'hots</h1>
                <p className='text-sm font-sans mt-2  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Rerum dolorum enim voluptatibus itaque expedita!</p>
              </div>

            </div>
          </div>
        </div>
      
      <div className=" w-full">
      <div className=" w-full flex flex-col justify-center items-center mt-20">
      <h1 className=' text-[20px] font-semibold mt-2 text-red-500 '>EXPERTS GROUTH</h1>
        <h1 className='text-[35px] font-bold text-center   mt-2'>OUR COMPANY GROUTH</h1>
      </div>
        <div className=" flex flex-col lg:flex-row md:flex-row mt-8 gap-6 justify-center items-center ">
          <div className="   w-[200px] h-[200px] flex flex-col justify-center items-center  hover:shadow-lg hover:shadow-slate-300">
            <img src={like} alt=""  className=' h-[30px]' />
            <h1 className='text-[35px] font-semibold mt-2'>199 +</h1>
            <p className='text-[16px] font-normal font-sans mt-2 '>Satisfied Customers</p>
          </div>
          <div className="   w-[200px] h-[200px] flex flex-col justify-center items-center hover:shadow-lg hover:shadow-slate-300">
            <img src={time} alt=""  className=' h-[30px]' />
            <h1 className=' text-[35px] font-semibold mt-2'>1591 +</h1>
            <p className='text-[16px] font-normal font-sans mt-2 '>Day Of Operation</p>
          </div>
          <div className="w-[200px] h-[200px]  flex flex-col justify-center items-center hover:shadow-lg hover:shadow-slate-300">
            <img src={tick} alt="" className=' h-[30px]' />
            <h1 className=' text-[35px] font-semibold mt-2'>283 +</h1>
            <p className='text-[16px] font-normal font-sans  mt-2'>Complete Projects</p>
          </div>
          <div className="w-[200px] h-[200px]  flex flex-col justify-center items-center hover:shadow-lg hover:shadow-slate-300">
            <img src={llll} alt=""   className=' h-[30px]'/>
            <h1 className=' text-[35px] font-semibold mt-2'>75 +</h1>
            <p className='text-[16px] font-normal font-sans mt-2 '>Win Awards</p>
          </div>

        </div>

      </div>



      </div>
    </div>

  )
}

export default ThirdPage