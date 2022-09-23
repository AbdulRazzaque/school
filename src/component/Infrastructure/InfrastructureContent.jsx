import React from 'react'
import pre_primary from '../../images/pre_primary.jpg'
import { InfrastructureData } from '../../Data/InfrastructureData'
const InfrastructureContent = () => {
    return (
        <div className=' md:ml-12 lg:bg-green-700 md:bg-black sm:bg-pink-500'>
            <div className="bg-[url('/src/images/subheaderbg.jpg')] w-full py-10 ">

                <h2 className='text-blue-900 text-4xl font-bold text-center  '>Infrastructure</h2>

            </div>
            
                <div className="grid grid-cols-1 gap-4  md:grid md:grid-cols-2 md:gap-4 mt-10 ">
                {InfrastructureData.map((data) => {
                    console.log(data.title);
                 return (  <div className='rounded-md bg-white mb-3'>
                    <img src={data.img} alt="" className='rounded-l-md rounded-r-md' />
                    <div className='p-4'>
                        <h2 className='text-blue-900 text-lg font-semibold px-6'>{data.title}</h2>
                        {console.log(data.desc)}

                        <p className="text-gray-500 px-6">{data.desc}</p>
                    </div>
                </div>)
                })}
            </div>
            
        </div>
    )
}

export default InfrastructureContent