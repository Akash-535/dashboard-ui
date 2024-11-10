import React, { useState, useEffect } from 'react'
import preloader from '../../assets/lottie/preloader.json'
import Lottie from 'lottie-react'
export const Preloader = () => {
    const [isPreloader, setPreloader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 2000)
    },)

    return (
        <div>
            {isPreloader ? (
                <div className='min-h-screen bg-black z-[100] fixed w-full h-full flex justify-center items-center'>
                    <div>
                        <Lottie animationData={preloader} /></div>
                </div>
            ) : null}
        </div>
    )
}
