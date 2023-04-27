import React, { useState } from 'react'
import { NavItems } from '../constants'
import logo from "../assets/iconbgwhite.png"
import { IoIosMenu } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"

const Nav = () => {

    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(!active)
    }

    return (
        <nav className='fixed top-0 right-0 left-0 bg-white shadow z-20'>
            <div className="container">
                <div className='w-full flex items-center justify-between h-[65px]'>
                    <div className='flex items-center gap-2'>
                        <img
                            src={logo}
                            alt="logo"
                            className='h-[30px]'
                        />
                        <span className='text-[24px] font-bold'>
                            Bizpend
                        </span>
                    </div>

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

                    <div className='md:hidden' onClick={toggleNav}>
                        {active ?
                            <AiOutlineClose fontSize={25} /> : <IoIosMenu fontSize={25} />
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav