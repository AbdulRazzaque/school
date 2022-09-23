import React from 'react'
import KINDERGARTEN from './KINDERGARTEN'

const AcademicContent = ({Data}) => {
  return (
    <div>
          <div className="bg-[url('/src/images/subheaderbg.jpg')] w-full py-10 ">
          <h2 className='text-blue-900 text-4xl font-bold text-center  '>Academic</h2>

          </div>
          <div className='mt-10 ml-14 mr-9'>
                     <div className=" grid grid-cols-1 md:grid md:grid-cols-3  bg-transparent text-blue-900 text-sm md:text-lg font-bold border-2 border-blue-900 ">
            <div>
                <button className='w-full h-[66px] border-b-2 md:border-b-0 border-blue-900  focus:bg-blue-900 focus:text-white '>EARLY YEARS PROGRAMME</button>
            </div>
            <div >
                <button className='w-full h-[66px]  border-b-2 md:border-b-0 md:border-r-2 md:border-l-2 border-blue-900  focus:bg-blue-900 focus:text-white' >THE FOUNDATION YEARS PROGRAMME</button>
            </div>
            <div className="3">
                <button className='w-full h-[66px]  focus:bg-blue-900 focus:text-white'>GROWING YEARS PROGRAMME</button>
            </div>
          </div>
          </div>
            <KINDERGARTEN/>
    </div>
  )
}

export default AcademicContent