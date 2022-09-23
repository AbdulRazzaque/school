import React from 'react'
import building from '../../images/building.jpg'
const AdmissionContent = () => {
  return (
    <div className=''>
     <div className="bg-[url('/src/images/subheaderbg.jpg')] w-full py-10 ">

      <h2 className='text-blue-900 text-4xl font-bold text-center '>Admission</h2>

     </div>
  <div class=" grid grid-cols-1   lg:grid lg:grid-cols-2 mt-11 md:mt-16">
  <div className='order-2 md:order-1 '>
    <img src={building} alt=""  className='md:ml-14  md:w-[602px] md:h-[315px]'/>
    <button className='my-3   w-full md:w-[605px] md:h-[34px]  border-2 border-blue-900 md:mt-5 md:ml-14 text-blue-900 font-bold  rounded-md hover:bg-blue-900 hover:text-white
    '>Download Prospectus</button>
  </div>
  <div className='order-1 md:order-2'>
    <h2 className='text-3xl text-blue-900 font-bold text-center  '>Our Aim</h2>
    <ul className='list-disc md:text-lg py-5 space-y-1 px-1 text-gray-500 ml-6 pr-9'>
      <li >
      To accept and respect all individuals without any bias or prejudice irrespective of differences in origin, religion, ethnicity or otherwise and create an inclusive learning community.
      </li>
      <li>
      To help learners exploit their potential to the fullest and help them improve and grow both academically and personally.
      </li>
      <li>
      To provide a dynamic and broad spectrum learning environment that will faster critical thinking skills in a students and help them become life long learners.
      </li>
      <li>
      To create and awareness among the learners of the social responsibilities and equip them with the skills to adapt to the changing needs of a global environment.
      </li>
    </ul>
  </div>
  </div>
    {/* here Start section 2 */}
    {/* <div className='grid grid-cols-2 '> */}
    <div className="grid grid-cols-1   lg:grid lg:grid-cols-2 ">
      <div>
      <h2 className='text-3xl text-blue-900 font-bold text-center'>Our Distinctions</h2>
      <ul className='list-disc md:text-lg py-5 space-y-1 px-1 text-gray-500 ml-11 pr-5'>
        <li>
        Celebrate of culture of excellence in academics and the all round development of children.
        </li>
        <li>
        Individual attention to each child to cater to their diverse learning needs.
        </li>
        <li>Talented, experienced, and dedicated teachers with linguistic and cultural diversity.</li>
        <li>Inclusive education with a committed team of a student care professionals.</li>
        <li>Offers and integrated curriculum from LKJ to class VIII. drawing upon the best of national and international curriculum.</li>
        <li>Wide range and depth of community service for program starting from class III.</li>
        <li>Upholds Indian culture and values, whilst fostering global citizenship.</li>
        <li>A safe and secure learning environment with focus on student well being.</li>
        <li>High quality Student Leadership opportunities including exposure to leaders,Innovators and iconic personalities from all walks of life.</li>
        <li>Enrichment classes by experts beyond regular curriculum.</li>
        </ul>
      </div>
      <div className=' mx-3 my-3 bg-blue-800 rounded-md md:p-12 md:mr-9 md:mb-5'>
        <p className='text-gray-200 font-semibold text-lg md:text-3xl '>Please fill the Form below to Place Admission Enquiry</p>
        <div className='grid grid-cols-1 gap-x-8 gap-y-8 my-3'>
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder: md:text-2xl bg-transparent'placeholder='Name of Studnt' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder: md:text-2xl bg-transparent'placeholder='Admission Required For Which Grade? ' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder: md:text-2xl bg-transparent'placeholder='Parent Name ' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder: md:text-2xl bg-transparent'placeholder='Contact Number ' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder: md:text-2xl bg-transparent'placeholder='Email ID' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder: md:text-2xl bg-transparent'placeholder='Residential Address' />
        
        </div>
        
        <button className="inline-block w-auto font-play  mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200" type="submit">Submit</button>
      </div>
    </div>

    </div>
  )
}

export default AdmissionContent