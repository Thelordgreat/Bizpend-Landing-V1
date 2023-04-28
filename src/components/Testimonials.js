import React, { useState, useEffect } from 'react'
import { Reviews } from '../constants'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Testimonials = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentSlide < Reviews.length - 3) {
                setCurrentSlide(currentSlide + 1);
            } else {
                setCurrentSlide(0);
            }
        }, 8000);
        return () => clearInterval(intervalId);
    }, [currentSlide]);


    const nextSlide = () => {
        if (currentSlide < Reviews.length - 3) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    };

    const previousSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(Reviews.length - 3);
        }
    };

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

                    {/*======= Desktop View testimonials ====*/}
                    <div className='hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4'>
                        {Reviews.slice(currentSlide, currentSlide + 3).map((testimonial, index) => (
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

                    {/*====== Mobile view testimonial ======*/}
                    <div className='grid gap-4 sm:hidden'>
                        {Reviews.slice(currentSlide, currentSlide + 1).map((testimonial, index) => (
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

                    <div className='flex flex-col gap-4 sm:flex-row items-center justify-between mt-12'>
                        <div>
                            <SliderDots
                                totalSlides={Reviews.length - 2}
                                activeIndex={currentSlide}
                            />
                        </div>
                        <div className='flex items-center gap-8 sm:gap-4 w-fit'>
                            <div
                                className='border border-[#000] p-2 rounded-full flex items-center justify-center cursor-pointer'
                                onClick={previousSlide}
                            >
                                <AiOutlineArrowLeft
                                    fontSize={20}
                                />
                            </div>

                            <div
                                className='border border-[#000] p-2 rounded-full flex items-center justify-center cursor-pointer'
                                onClick={nextSlide}
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
        <div className='border shadow rounded-lg bg-[#FFFFFF] py-8 px-6 transition-all'>
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

const SliderDots = ({ totalSlides, activeIndex }) => {
    const dots = [];
    for (let i = 0; i < totalSlides; i++) {
        dots.push(
            <span
                key={i}
                className={
                    `h-[8px] w-[8px] rounded-full mx-[5px] bg-[#ccc] cursor-pointer ${i === activeIndex ? '!bg-[#000]' : ''}`}
            />
        );
    }

    return <div className="flex justify-center items-center mt-5">{dots}</div>;
};

export default Testimonials