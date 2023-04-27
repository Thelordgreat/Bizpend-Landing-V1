import React from 'react'
import { Feature } from '../constants'

const Features = () => {
    return (
        <section className='pt-8 pb-[7rem]'>
            <div className="container">
                <div>
                    <div className='text-center mb-6'>
                        <span className='bg-[#F9F6FF] py-2 px-6 rounded-full text-[16px] text-[#454ADE] font-semibold'>
                            Features
                        </span>
                    </div>
                    <h2 className='text-center text-3xl font-bold mb-16'>
                        We have solutions that work for you
                    </h2>
                    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                        {Feature.map((item) => {
                            return (
                                <FeatureCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    text={item.text}
                                    bgColor={item.bgColor}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}


const FeatureCard = ({ image, title, text, bgColor }) => {
    return (
        <div
            className={`shadow rounded-lg overflow-hidden pt-2`}
            style={{
                backgroundColor: `${bgColor}`
            }}
        >
            <div className='w-full p-4'>
                <img
                    src={image}
                    alt="widget"
                    className='w-[60px]'
                />
            </div>

            <div className='p-4'>
                <h3 className='text-[20px] text-[#000000] font-medium mb-2'>
                    {title}
                </h3>
                <p
                    className='text-[14px] mb-4'
                    style={{
                        color: "rgba(0, 0, 0, 0.7)"
                    }}
                >
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Features