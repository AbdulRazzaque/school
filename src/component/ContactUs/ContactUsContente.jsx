import React from 'react'

const ContactUsContente = () => {
    return (
        <div>
            <div className="bg-[url('/src/images/subheaderbg.jpg')] w-full py-10 ">
                <h2 className='text-blue-900 text-4xl font-bold text-center  '>Contact Us</h2>
            </div>
            <div className='bg-white mt-[83px] ml-9 mr-8 rounded-md py-11'>
            <h2 className='text-blue-900 text-3xl font-bold text-center  '>School Address</h2>
            <p className='text-center py-2 px-1 text-gray-500 text-lg' >Address: Gut No. 49, Bajaj Nagar, MIDC, Waluj, Aurangabad – 431136. (MH).</p>
            <p className='text-center py-2 text-gray-500 text-lg' >Contact: 6232616161/ 6232717171</p>
            <p className='text-center py-2 text-gray-500 text-lg' >Email: info@bhondawepatilschool.in</p>
            </div>
            {/* herer use section two */}
            <div className='grid grid-cols-1  md:grid md:grid-cols-2 mt-4 '>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8219773438527!2d75.23331011395481!3d19.84748408665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b6df9173029%3A0x1d20d2e7adfd03c3!2sBhondawe%20Patil%20Public%20School!5e0!3m2!1sen!2sin!4v1661421093712!5m2!1sen!2sin" className='md:w-[645px] md:h-[395px]  w-full h-full border-0'   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='bg-blue-800 rounded-md p-12 m-5 md:mr-9 mb-5'>
        <p className='text-gray-200 font-semibold text-3xl '>Send Us a Message</p>
        <div className='grid grid-cols-1 gap-x-8 gap-y-8 my-3'>
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder:text-2xl bg-transparent'placeholder='Name' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder:text-2xl bg-transparent'placeholder='Mobile Number ' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder:text-2xl bg-transparent'placeholder='Email' />
        <input type="text" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder:text-2xl bg-transparent'placeholder='Subject' />
  
       
        <textarea name="" id="" className='border-b-2 border-gray-200 text-red-700 outline-none px-4 py-2 col-span-2 placeholder:text-2xl bg-transparent' placeholder='Message' cols="30" rows="5 "></textarea>
        </div>
        <button className="inline-block w-auto font-play mt-4 px-6 py-2 bg-gradient-to-r from-red-700 to-red-500 rounded-md shadow-md text-sm font-bold text-gray-200" type="submit">send</button>
      </div>
    </div>
        </div>
    )
}

export default ContactUsContente