import React, { useState } from 'react'
import { NavItems } from '../constants'
import logo from "../assets/iconbgwhite.png"
import { IoIosMenu } from "react-icons/io"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from 'react-router-dom'

const Nav = () => {

    const [active, setActive] = useState(false);

    const toggleNav = () => {
        setActive(!active)
    }

    const closeMobileNav = () => {
        setActive(false);
    }

    return (
        <nav className='fixed top-0 right-0 left-0 bg-white shadow z-20'>
            <div className="container">
                <div className='w-full flex items-center justify-between h-[65px]'>
                    <Link to="/">
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
                    </Link>

                    <div className='hidden md:flex items-center gap-6'>
                        {NavItems.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                >
                                    <Link
                                        to={item.link}
                                        className='text-[#202020] font-medium text-[16px]'
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            )
                        })}

                        <Link to="/contact">
                            <button
                                className='bg-[#454ADE] px-4 py-3 text-[16px] text-white rounded-xl ml-8'
                            >
                                Get Started
                            </button>
                        </Link>
                    </div>

                    <div className='md:hidden' onClick={toggleNav}>
                        {active ?
                            <AiOutlineClose fontSize={25} /> : <IoIosMenu fontSize={25} />
                        }
                    </div>
                </div>

                {/*====== Mobile Nav =====*/}
                {active ? (
                    <div className='w-full absolute bg-white left-0 right-0 top-[64px] flex flex-col justify-center items-center gap-5 px-8 py-14'>
                        <Link
                            to="/"
                            className='text-[#202020] font-medium text-[16px]'
                            onClick={closeMobileNav}
                        >
                            Features
                        </Link>
                        <Link
                            to="/"
                            className='text-[#202020] font-medium text-[16px]'
                            onClick={closeMobileNav}
                        >
                            FAQs
                        </Link>
                        <Link
                            to="/"
                            className='text-[#202020] font-medium text-[16px]'
                            onClick={closeMobileNav}
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/contact"
                            className='text-[#202020] font-medium text-[16px]'
                            onClick={closeMobileNav}
                        >
                            Contact Us
                        </Link>

                        <Link
                            to="/contact"
                            className='bg-[#454ADE] w-full sm:w-fit text-[#ffffff] rounded-lg py-3 px-6 text-center'
                            onClick={closeMobileNav}
                        >
                            Get started
                        </Link>
                    </div>
                ) : null}
            </div>
        </nav>
    )
}

export default Nav