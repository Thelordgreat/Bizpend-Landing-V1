import React from 'react'
import users from "../assets/users.png"
import star from "../assets/star.png"
import heart from "../assets/heart.png"

const Stats = () => {
    return (
        <section className='bg-[#1E2338] h-[200px] mb-12'>
            <div className="container">
                <div className="grid grid-cols-3 text-white h-[200px]">
                    <div className='flex items-center justify-center gap-4'>
                        <img src={users} alt="users" className='h-[50px]'/>
                        <span className='flex flex-col gap-2'>
                            <span className='text-4xl font-medium'>200k+</span>
                            <span className='text-[16px] font-light'>Active users</span>
                        </span>
                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <img src={heart} alt="heart" className='h-[50px]'/>
                        <span className='flex flex-col gap-2'>
                            <span className='text-4xl font-medium'>98%</span>
                            <span className='text-[16px] font-light'>Customer satisfaction</span>
                        </span>
                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <img src={star} alt="star" className='h-[50px]'/>
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