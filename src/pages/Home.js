import React, { useEffect, useState } from 'react'
import imh6 from '../assests/imh6.jpg'
import { Checkbox, TextField } from '@mui/material'
import axios from 'axios'

const Home = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [check, setCheck] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [fNmae, SsetFname] = useState('')
  const [lName, setLName] = useState('')

  const handelSubmit = async (e) => {
    e.preventDefault()
    console.log('hh')
    // if (check === false) {
    //   return setErrorMessage('tick the check box')
    // }
    if (!email || !fNmae || !lName) {
      return setErrorMessage('All fields are required')
    }
    try {
      const res = axios.post("https://getform.io/f/ajjemwma", {
        email, fNmae, lName,
      })
      setSuccessMessage('success')

    } catch (error) {
      console.log(error.message)
      setErrorMessage(error.message)
    }

  }
  const handelOpen = () => {
    setIsOpen(true)
  }
  useEffect(() => {
    const handelScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
      setIsOpen(false)
    }
    window.addEventListener('scroll', handelScroll)
    return () => {
      window.removeEventListener('scroll', handelScroll)
    }
  }, [isOpen])

  const handelClose = () => {
    setIsOpen(false)
  }

  return (
    <div className=' min-h-screen w-full flex justify-center' >
      <div className=" w-full lg:w-[60%] h-[80%] flex lg:flex-row flex-col -mt-8  lg:mt-16 mt- items-center ">
        <div className="  w-full  lg:w-[85%] h-[460px] flex flex-col   items-center lg:items-start  gap-5">
          <span className=' text-2xl mt-20  text-red-500'>AWARD   WINNING</span>
          <h1 className=' text-4xl font-bold '> DIGITAL MARKETING <br /> AGENCY</h1>
          <p className='  mt-3 text-sm font-sans text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Facilis laborum autem Voluptatem ex nulla aliquam nesciunt laborum
            labore tempore fugit dolores?</p>
          <button
            className=' bg-red-500 w-[110px] font-semibold rounded-sm
            border-red-500 text-white h-[35px]  mt-3 font-sans text-[12px]' onClick={handelOpen}>CONTACT US</button>
        </div>
        <div className=" ">
          <img src={imh6} alt="" className=' -mt-10 lg:mt-2 h-[300px] w-[300px] lg:w-[500px] lg:h-[500px] ' />
        </div>
        {
          isOpen && (
            <div className=' fixed bg-slate-200 hover:shadow-lg hover:shadow-slate-300
             flex flex-col h- w-[40%] lg:h-[320px] lg:w-[563px] top-[90px] items-center lg:left-[393px] rounded-md justify-center'>
              <div className=" w-[90%] h-[380px]   mt-3    ">
                  <form action="" typeof='' onSubmit={handelSubmit}>
                <div className=" flex justify-between">
                    <h1 className=' text-[28px] font-semibold '>Talk to us</h1>
                    <h1 className=' text-center  bg-slate-400 w-7 h-7 cursor-pointer' onClick={handelClose}>X</h1>
                </div>
                <div className="">
                  <TextField id='Work email' name='email' value={email} className=' w-full' label="Work email*" variant="standard" onChange={((e) => setEmail(e.target.value))} />
                </div>
                <div className=" flex flex-row justify-between  gap-5items-center">
                  <TextField id='firstName' name='fName' value={fNmae} className=' w-[40%]' label="First name*" variant="standard" onChange={((e) => SsetFname(e.target.value))} />
                  <TextField id='lastName' name='lName' value={lName} className=' w-[40%]' label="Last name*" variant="standard" onChange={((e) => setLName(e.target.value))} />
                </div>
                <div className=" flex flex-row items-center justify-center mt-3">
                  <Checkbox value={check} name='check' />
                  <p className=' mt-4'>
                    I agree to Fyle's terms and conditions, and provide constent send me communication.
                  </p>
                </div>
                <button
                  className=' bg-red-500 w-full font-bold rounded-md
            border-red-500 text-white h-[35px]  mt-3 font-sans text-[15px]'  type='submit' >Contact Us</button>
</form>
                {
                  errorMessage && (
                    <span className=' text-red-500'>{errorMessage}</span>
                  )
                }
{
                  successMessage && (
                    <span className=' text-green-500'>{successMessage}</span>
                  )
                }
              </div>

            </div>

          )
        }
      </div>
    </div>
  )
}

export default Home