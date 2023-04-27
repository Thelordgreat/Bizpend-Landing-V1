import React from 'react'
import { NavItems } from '../constants'

const Nav = () => {
    return (
        <nav className='fixed top-0 right-0 left-0 bg-white shadow z-20'>
            <div className="container">
                <div className='w-full flex items-center justify-between h-[65px]'>
                    <div className='text-[18px] font-semibold'>LogoIpsum</div>

                    <div className='hidden md:flex items-center gap-6'>
                        {NavItems.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                >
                                    <a
                                        href={item.link}
                                        className='text-[#202020] font-medium text-[16px]'
                                    >
                                        {item.title}
                                    </a>
                                </div>
                            )
                        })}

                        <button
                            className='bg-[#454ADE] px-4 py-3 text-[16px] text-white rounded-xl ml-8'
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav