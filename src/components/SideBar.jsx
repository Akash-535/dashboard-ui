import React, { useState } from 'react';
import { SIDE_BAR_ITEM, SIDE_BAR_LINK } from './common/Helper';
import logo from '../assets/images/webp/Logo.webp';
import man_img from '../assets/images/webp/sidebar-man-img.webp';
import Icon from './common/Icons';

const SideBar = () => {
    const [showSlide, setShowSlide] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null);

    const toggleSidebar = () => setShowSlide(!showSlide);
    const toggleIcon = (index) => setActiveIcon(index);

    return (
        <>
            <div className='relative'>
                <div onClick={toggleSidebar} className={`w-full lg:hidden h-full fixed bg-black top-0 right-0 bg-layer transition-opacity duration-300 ${showSlide ? 'z-[40] opacity-60' : 'z-0 opacity-0'}`}> </div>
                <div onClick={toggleSidebar} className='fixed top-4 left-2 z-[150] flex-col gap-1 lg:hidden flex'>
                    <span className={`${showSlide ? 'w-14 h-2 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-14 h-2 bg-black duration-300 ease-linear rounded'}`}></span>
                    <span className={`${showSlide ? 'w-14 h-2 bg-white  translate-x-20 opacity-0 duration-700 ease-linear' : 'w-12 h-2 bg-black duration-700 ease-linear rounded'}`}></span>
                    <span className={`${showSlide ? 'w-14 h-2 bg-white -rotate-45 -translate-y-3 duration-300 ease-linear rounded' : 'w-10 h-2 bg-black duration-300 ease-linear rounded'}`}></span>
                </div>
                <div className={`flex flex-col justify-between bg-black min-h-screen w-60 px-10 pt-11 pb-10 left-0 lg:sticky fixed max-md:z-[40] top-0 duration-500 z-50 ease-linear transform max-[769px]:pt-16 ${showSlide ? 'max-[796px]:translate-x-0' : 'max-[769px]:-translate-x-full'}`}>
                    <div>
                        <img className='pb-[62px] cursor-pointer' src={logo} alt="logo" />
                        {SIDE_BAR_ITEM.map((obj, i) => (
                            <div
                                onClick={() => toggleIcon(i)}
                                key={i}
                                className={`${i === 0 ? 'pt-0 gap-4 cursor-pointer flex items-center' : 'pt-8 text-white gap-4 cursor-pointer flex items-center'}`}
                            >
                                <div className={`${activeIcon === i ? 'size-1.5 bg-[#FFED00] rounded-full' : ''}`}></div>
                                <Icon svgClass={activeIcon === i ? 'fill-[#FFED00]' : 'fill-white'} iconName={obj.icon} />
                                <p className={`${activeIcon === i ? 'text-base font-normal text-[#FFED00]' : 'text-base font-normal text-white'}`}>
                                    {obj.iconLink}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div>
                        {SIDE_BAR_LINK.map((val, i) => (
                            <div key={i} className={`${i === 0 ? "pt-0" : "pt-4"}`}>
                                <a href="#" className='opacity-50 text-white'>{val.sidebarLink}</a>
                            </div>
                        ))}
                        <div className='flex items-center pt-11 gap-[14px]'>
                            <img className='size-8' src={man_img} alt="img" />
                            <p className='text-white'>Zareh Geertjes</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;
