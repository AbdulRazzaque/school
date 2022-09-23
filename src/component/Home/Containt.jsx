import React from 'react'
import welcome1 from '../../images/home-welcome-1.jpg'
import welcome2 from '../../images/home-welcome-2.jpg'


const Containt = () => {
  return (
<div className='grid grid-cols-1 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 '>
  <div className='grid grid-cols-2  md:flex md:my-5 mt-4'>
    <img src={welcome1} alt="" className='md:ml-44 mt-11 md:w-[256px] md:h-[409px]  mx-auto'/>
    <img src={welcome2} alt="" className='md:w-[250px] md:h-[403px]  mx-auto'/>
    </div>
    <div className='pb-5  md:text-center px-5 text-center pt-12 md:pr-36 md:pl-10 '>
        <p className='text-red-700 text-3xl font-bold font-serif'>Welcome to </p>
        <p className='text-blue-900 text-3xl font-bold font-serif'>Bhondawe Patil Public <br /> School</p>
        <p className='text-gray-500 '>Welcome to the abode of intellect where the purpose of education is to 
         equip the child with the most excellent technological proficiency; to empower him with
          the skills in order to realize his God gifted potential; to creole the light climate so that 
          the child may develop fully as a complete human being At hi BHONDAWE PATIL PUBLIC
           SCHOOL, one's intellect is I transformed into an illuminated reflection of knowledge
            and broad outlook towards life.</p>
    </div>

</div>
  )
}

export default Containt