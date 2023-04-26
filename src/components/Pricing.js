import React from 'react'


import { PricingDetails } from '../constants'
import tick from "../assets/tick.png"

const Pricing = () => {
  return (
    <section className='bg-[#F8FAFC] py-[6rem]'>
      <div className="container">

        <div className='text-center pb-12'>
          <h2 className='text-3xl font-bold mb-4'>
            Market Friendly Pricing
          </h2>
          <p className='text-[#64748B] text-[18px] w-[38%] mx-auto'>
            Choose a suitable pricing plan for your team and get started immediately
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {PricingDetails.map((item, index) => {
            return (
              <PricingCard
                key={item.id}
                index={index}
                type={item.type}
                amount={item.amount}
                detail={item.detail}
                feature1={item.feature1}
                feature2={item.feature2}
                feature3={item.feature4}
                feature4={item.feature4}
                bgColor={item.bgColor}
                colorCode={item.colorCode}
                btnBg={item.btnBg}
                link={item.link}
                btnColor={item.btnColor}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

const PricingCard = (
  { type, amount, detail, feature1, feature2, feature3, feature4, bgColor, colorCode, link, btnBg, btnColor }
) => {

  return (
    <div
      className='border p-4 shadow rounded-lg'
      style={{
        backgroundColor: `${bgColor}`,
        color: `${colorCode}`
      }}
    >
      <div className='my-4 text-xl font-bold'>
        {type}
      </div>

      <div className='flex flex-col mb-6 gap-2'>
        <span className='flex items-center gap-1'>
          <span className='text-3xl font-bold'>{amount}</span>
          <span className='text-[#64748B]'>/month</span>
        </span>

        <span className='text-[#94A3B8] text-[14px]'>
          {detail}
        </span>
      </div>

      <hr className='bg-[#E2E8F0]' />

      <ul className='mt-6 mb-4 text-[14px]'>
        <li className='flex items-center gap-3 py-3'>
          <img src={tick} alt="tick" />
          {feature1}
        </li>

        <li className='flex items-center gap-3 py-3'>
          <img src={tick} alt="tick" />
          {feature2}
        </li>

        <li className='flex items-center gap-3 py-3'>
          <img src={tick} alt="tick" />
          {feature3}
        </li>

        <li className='flex items-center gap-3 py-3'>
          <img src={tick} alt="tick" />
          {feature4}
        </li>
      </ul>

      <a href={link}>
        <button
          className='text-[14px] border w-full h-[45px] rounded-lg font-semibold'
          style={{
            backgroundColor: `${btnBg}`,
            color: `${btnColor}`
          }}
        >
          Get Started
        </button>
      </a>

    </div>
  )
}

export default Pricing