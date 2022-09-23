import React from 'react'
import img1 from '../../images/01.jpg'
import img2 from '../../images/02.jpg'
import img3 from '../../images/03.jpg'
import img4 from '../../images/04.jpg'
import img5 from '../../images/05.jpg'
import img6 from '../../images/06.jpg'
const GalleryContent = () => {
  return (
    <div>
      <div className="bg-[url('/src/images/subheaderbg.jpg')] w-full py-10 ">
        <h2 className='text-blue-900 text-4xl font-bold text-center  '>Event Gallery</h2>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:gap-4 mt-24 ml-8 mr-8 ">
        <div className=' '>

        <img src={img1} alt="" className='rounded-md ' />
        </div>
        <div className='w-full h-full '>

        <img src={img2} alt="" className='rounded-md' />
        </div>
        <div className=''>

        <img src={img3} alt="" className='rounded-md w-full h-full md:w-[410px] md:h-[215px]' />
        </div>
        <div className=''>

        <img src={img4} alt="" className='rounded-md w-full h-full md:w-[410px] md:h-[215px]' />
        </div>
        <div className=''>

        <img src={img5} alt="" className='rounded-md w-full h-full md:w-[410px] md:h-[215px]' />
        </div>
        <div className=''>

        <img src={img6} alt="" className='rounded-md w-full h-full md:w-[410px] md:h-[215px]' />
        </div>
     
      </div>
    </div>
  )
}

export default GalleryContent