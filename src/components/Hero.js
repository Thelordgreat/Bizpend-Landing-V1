import React from 'react'
import heroImg from "../assets/hero-img.png"
import people from "../assets/people.png"

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className='flex flex-col md:flex-row pt-[100px] pb-[80px] gap-8'>
                    <div className='flex-1 pt-[10rem]'>

                        <h2 className='text-3xl lg:text-[3rem] leading-[1.2] font-semibold mb-4'>
                            All-inclusive financial management solution for businesses
                        </h2>
                        <p className='text-[20px]'>We provide customizable budgets, card limits, and monitoring features to ensure control and visibility over spending.</p>

                        <div className='flex items-center gap-2 mt-5'>
                            <button className='bg-[#454ADE] text-[#ffffff] rounded-lg py-3 px-6 '>
                                Get started
                            </button>
                            <button className='bg-transparent border text-[#454ADE] border-[#454ADE] rounded-lg py-3 px-6 text-[14px]'>
                                Request a demo
                            </button>
                        </div>

                        <div className='flex items-center gap-3 mt-12'>
                            <img src={people} alt="people" className='h-[45px]'/>
                            <span>Join the thousands of users who trust us</span>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img
                            src={heroImg}
                            className='translate-x-8'
                            alt="Hero pic"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero