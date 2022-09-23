import React, { useState } from 'react'
import about from '../../images/about-bg.jpg'
import Chairmain from './Chairmain'
import Mission from './Mission'
import Philosophy from './Philosophy'
const AboutContent = () => {
  const [open,setOpen]=useState('mission')
  return (
    <div >
    <img src={about} alt="" />
    {/* <div className='  md:flex mt-10'> */}
    <div className='   md:flex mt-10'>
     
        <div className=" p-3 bg-white space-y-2 content-start  md:col-span-2 border-2 rounded-md  md:w-[318px] h-[230px]   m-auto md:ml-9">
      <button onClick={()=>{setOpen('mission')}} className='border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full default:focus:bg-blue-900 focus:bg-blue-900 focus:text-white focus:border-blue-900 bg-white ' > Mission & vision</button>
      <button onClick={()=>{setOpen('philosophy')}} className='border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full default:focus:bg-blue-900 focus:bg-blue-900 focus:text-white focus:border-blue-900 bg-white'>  Philosophy</button>
      <button onClick={()=>{setOpen('Chairmain')}} className='border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full default:focus:bg-blue-900 focus:bg-blue-900 focus:text-white focus:border-blue-900 bg-white'> Chairman's Desk</button>
      <button  className='border-2 p-2 text-blue-900 font-bold  border-gray-100 rounded-md w-full default:focus:bg-blue-900 focus:bg-blue-900 focus:text-white focus:border-blue-900 bg-white'> Managing Director 's Desk</button>
        </div>
        <div className="ml-5  md:w-[950px] bg-white rounded-md mb-11 "> 
        {open ==='mission' && <Mission/>} 
        {open ==='philosophy' && <Philosophy/>} 
        {open ==='Chairmain' && <Chairmain/>} 
        </div>

    </div>
    </div>
  )
}

export default AboutContent