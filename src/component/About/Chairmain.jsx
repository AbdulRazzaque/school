import React from 'react'
import Chairmainimg from '../../images/chairman.jpg'
const Chairmain = () => {
  return (
    <div className='items-center justify-center m-5'>
        <img src={Chairmainimg} alt=""  className='w-full h-full bg-cover'/>
        <h3 className='font-semibold text-center text-lg text-blue-900 pt-2 '> SHRI. HANUMAN BHONDAWE PATIL</h3>
        <p className='text-gray-500 text-center pt-1'>Chairman</p>
        <h2 className='text-xl md:text-3xl font-bold text-center pt-6 pb-2 md:pt-12 text-blue-900'>Words of our Chairmain</h2>
        <p className='px-5 text-gray-500 md:text-lg '>
                    Bhondawe Patil Public School is started with a focused mission to Inculcate a passion for lifelong learning among students and empower them to learn and excel, so that they can face the practical life situation with confidence and determination: standing true and tall to our vision of facilitating overall personality grooming, academic excellence as one of the primary objectives of our institution.
            Our spacious, ventilated and smart classrooms, highly proficient faculty, professional & experienced management, balanced curriculum with ample space for co-curricular activities, social and value based education etc; make our schooling experience a distinct and unique one.
            I wish every learner for an empowered learning and excellence In school and all facets of life.
            Best Wishes & Warm Regards
        </p>
    </div>
  )
}

export default Chairmain