import React, { useState } from 'react'
import star_ellips from '../assets/images/webp/star-ellips.webp'
import { Typewriter } from 'react-simple-typewriter'
import SideBar from './SideBar'
import { CARDS_DATA } from './common/Helper'
import { Tilt } from 'react-tilt'
import { Preloader } from './common/Preloader'
const DashBoard = () => {
    const [activeIcon, setActiveIcon] = useState(null);
    const toggleIcon = (index) => setActiveIcon(index);
    return (<>
        <div className='flex relative'>
            <Preloader />
            <SideBar />
            <div className='flex flex-col min-h-screen w-full'>
                <div className='flex justify-between sticky top-0  z-20 w-full '>
                    <div className=' bg-[#FFED00] h-60 flex justify-between grow w-full -z-10 max-md:w-full max-md:fixed'>
                        <div className='ps-9 pt-10 max-[769px]:pt-14'>
                            <h2 className='text-4xl font-bold'> <Typewriter words={['Welcome back , ', 'Hello ,']}
                                loop={6}

                                typeSpeed={200}
                                deleteSpeed={100}
                                delaySpeed={2000}></Typewriter> Zareh 👋🏻 </h2>
                            <p className='text-base font-normal pt-5'>Below you find your upcoming events, enrolled programmes and progress</p>
                        </div>
                        <img src={star_ellips} alt="star ellips" />
                    </div>
                </div>
                <div>
                    {CARDS_DATA.map((data, i) => (
                        <div onClick={() => toggleIcon(i)} key={i} className={`${activeIcon === i ? "flex justify-center items-center overflow-hidden flex-wrap py-10 gap-10" : 'hidden'}`}>
                            <Tilt>
                                <div className='border bg-red-600 size-60 px-60 justify-center items-center flex w-6/12 text-white text-nowrap text-5xl font-bold hover:bg-gradient-to-r hover:from-blue-400 hover:via-green-500 hover:to-yellow-500 duration-500 ease-linear'>{data.text}</div>
                            </Tilt></div>
                    ))}
                </div>
            </div>
        </div>
    </>
    )
}

export default DashBoard
