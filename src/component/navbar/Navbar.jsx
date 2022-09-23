import React from 'react';
import Biglogo from'../../images/big-logo.jpg'
import logo from'../../images/logo.jpg'
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from 'react'
const Navbar = () => {

  window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight; 
    console.log(newWidth)
    if(newWidth>765 ){
      SetStatus(true)
    
    }
    else{
      SetStatus(false   )
    }
});

  const [status,SetStatus] = useState(true)
  
  return (
  <nav className="wrapper">
             <div className=" bg-red-700 py-1 hidden sm:flex  text-sm text-white justify-between"> 
             <div className='pl-9'>
               info@bhondawepatilschool.in
             </div>
            <div className='pr-8'>
          facebook
            </div>
          
             </div>
             <div className='bg-white '>
             <div className='ml-9 mt-2 flex justify-between  '>
       
                <img src={Biglogo} alt="" className='hidden md:flex' />
                <img src={logo} alt=""className='md:hidden' />
                < FaBars className='text-blue-900 md:hidden m-5 text-3xl cursor-pointer'onClick={()=>SetStatus(!status)} />
             </div>
             </div>
             <div className="bg-blue-900 py-3 mt-2 ">
            
           <div>
                { status?    
                <ul className=' md:flex  text-white text-sm space-x-10 ml-14   divide-y-2 md:divide-y-0 font-semibold '>


                    <Link to="/"> <li  className='cursor-pointer'  >Home</li></Link>
                    <Link to="/AboutUs"> <li  className='cursor-pointer' >About Us</li></Link>
                    <Link to="/Admission"> <li className='cursor-pointer'  >Admission</li></Link>
                    <Link to="/Academic"> <li>Academic</li></Link>
                    <Link to="/Achievement"> <li className='cursor-pointer' >Achievement</li></Link>
                    <Link to="/Infrastructure"> <li className='cursor-pointer' >Infrastructure</li></Link>
                    <Link to="/Gallery"> <li className='cursor-pointer' >Gallery</li></Link>
                    <Link to="/ContactUs"> <li className='cursor-pointer' >Contact Us</li></Link>
              
                </ul>
                    :null}
                </div>
         
             </div>
  </nav>
  )
}

export default Navbar