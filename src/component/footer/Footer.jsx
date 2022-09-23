import React from 'react'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import youtube from '../../images/youtube.png'
const Footer = () => {
    return (
        <>
            <div className="footer pt-8 sm:pl-14 bg-white pl-10">
                <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-4 md:gap-4">
                    <div className='leading-7'>
                        <p className='text-red-800 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5' > School Address</p>
                        <p className='text-2xl text-blue-900'> Bhondawe Patil Public School</p>
                        <p className=' text-blue-900'>Gut No. 49, Bajaj Nagar,MIDC,<br />
                            Waluj, Aurangabad – 431136. (MH).
                            Contact: 6232616161/ 6232717171
                        Email: info@bhondawepatilschool.in
                        </p>
                    </div>
                    <div className='text-left md:pl-[114px]'>
                        <p className='text-red-800 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5'>Quick Links</p>
                        <div className='text-blue-900 leading-7 cursor-pointer pb-4 '>
                            <p className='hover:text-red-800 '>Home </p>
                            <p className='hover:text-red-800 '> About Us</p>
                            <p className='hover:text-red-800 '> Admission</p>
                            <p className='hover:text-red-800 '> Academic</p>
                            <p className='hover:text-red-800 '> Achievement</p>
                            <p className='hover:text-red-800 '> Infrastructure</p>
                            <p className='hover:text-red-800 '> Gallery</p>
                            <p className='hover:text-red-800 '> Contact Us</p>
                        </div>
                    </div>
                    <div className='pb-4  md:pl-40'>
                        <p className='text-red-800 text-2xl font-semibold underline underline-offset-8 decoration-gray-300 pb-5'> Follow Us on</p>
                        <div className='flex w-10 h-10 space-x-4 cursor-pointer'>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={youtube} alt="" />
                        </div>
                    </div>



                </div>

            </div>
            <div className=' bg-red-700 py-1 text-center text-sm text-white '>
                <p>All Rights Reserved With Bhondawe Patil Public School</p>
            </div>
        </>

    )
}

export default Footer