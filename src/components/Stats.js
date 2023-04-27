import React from 'react'
import users from "../assets/users.png"
import star from "../assets/star.png"
import heart from "../assets/heart.png"

const Stats = () => {
    return (
        <section className='bg-[#1E2338] h-auto mb-12 py-8 sm:py-0'>
            <div className="container">
                <div className="grid md:grid-cols-3 text-white md:h-[200px] place-items-center">
                    <div className='flex flex-col sm:flex-row justify-center gap-4 text-center sm:text-left py-6'>
                        <img src={users} alt="users" className='w-[50px] h-[50px] mt-1 mx-auto sm:mx-0'/>
                        <span className='flex flex-col gap-2'>
                            <span className='text-4xl font-medium'>200k+</span>
                            <span className='text-[16px] font-light'>Active users</span>
                        </span>
                    </div>

                    <div 
                    className='flex flex-col sm:flex-row justify-center gap-4 text-center sm:text-left py-6'
                    >
                        <img src={heart} alt="heart" className='h-[50px] mt-1 mx-auto sm:mx-0'/>
                        <span className='flex flex-col gap-2'>
                            <span className='text-4xl font-medium'>98%</span>
                            <span className='text-[16px] font-light'>Customer satisfaction</span>
                        </span>
                    </div>

                    <div 
                    className='flex flex-col sm:flex-row justify-center gap-4 text-center sm:text-left py-6'
                    >
                        <img src={star} alt="star" className='w-[50px] h-[50px] mt-1 mx-auto sm:mx-0'/>
                        <span className='flex flex-col gap-2'>
                            <span className='text-4xl font-medium'>4.9</span>
                            <span className='text-[16px] font-light'>Customer rating</span>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Stats