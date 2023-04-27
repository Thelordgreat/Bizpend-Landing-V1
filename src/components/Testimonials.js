import React, { useState } from 'react'
import { Reviews } from '../constants'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Testimonials = () => {

    const [selected, setSelected] = useState(0);

    const tLength = Reviews.length;

    return (
        <section className='bg-[#FFF2E7] py-16'>
            <div className="container">
                <div>
                    <div className='text-center mb-6'>
                        <span className='bg-[#FFFFFF] py-2 px-6 rounded-full text-[16px] text-[#454ADE] font-semibold'>
                            Testimonials
                        </span>
                    </div>

                    <h2 className='text-center text-3xl font-bold mb-4 pb-12'>
                        What our customers say about us
                    </h2>

                    {/*==== looped testimonials ====*/}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {Reviews.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                index={index}
                                review={testimonial.review}
                                image={testimonial.client.image}
                                clientName={testimonial.client.clientName}
                                role={testimonial.client.role}
                            />
                        ))}
                    </div>

                    <div className='flex items-center justify-between mt-12'>
                        <div>
                            000
                        </div>
                        <div className='flex items-center gap-4 w-fit'>
                            <div
                                className='border border-[#000] p-2 rounded-full flex items-center justify-center cursor-pointer'
                                onClick={() => {
                                    selected === 0
                                        ? setSelected(tLength - 1)
                                        : setSelected((prev) => prev - 1);
                                }}
                            >
                                <AiOutlineArrowLeft
                                    fontSize={20}
                                />
                            </div>

                            <div
                                className='border border-[#000] p-2 rounded-full flex items-center justify-center cursor-pointer'
                                onClick={() => {
                                    selected === tLength - 1
                                        ? setSelected(0)
                                        : setSelected((prev) => prev + 1);
                                }}
                            >
                                <AiOutlineArrowRight
                                    fontSize={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({ review, image, clientName, role }) => {
    return (
        <div className='border shadow rounded-lg bg-[#FFFFFF] py-8 px-6'>
            <p className='mb-4 text-[16px] text-[#000000] h-[140px]'>
                {review}
            </p>

            <div className='flex items-center gap-3'>
                <img
                    src={image}
                    alt="client"
                    className='w-[50px]'
                />

                <div className='flex flex-col'>
                    <span className='text-[#000000] font-medium text-[16px]'>
                        {clientName}
                    </span>

                    <span className='text-[#64748B] text-[14px]'>
                        {role}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials