import React from 'react'


import { PricingDetails } from '../constants'
import tick from "../assets/tick.png"

const Pricing = () => {
  return (
    <section className='bg-[#F8FAFC] py-[6rem]'>
      <div className="container">

        <div className='text-center pb-12'>

          <span className='bg-[#FFFFFF] py-2 px-6 rounded-full text-[16px] text-[#454ADE] font-semibold'>
            Pricing
          </span>
          <h2 className='text-3xl font-bold mb-4 mt-6'>
            Choose from our range of flexible prices
          </h2>
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
                popularity={item.popularity}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

const PricingCard = (
  { type, amount, detail, feature1, feature2, feature3, feature4, bgColor, colorCode, link, btnBg, btnColor, popularity }
) => {

  const popularityType = popularity;

  return (
    <div
      className='border p-6 shadow rounded-lg'
      style={{
        backgroundColor: `${bgColor}`,
        color: `${colorCode}`
      }}
    >
      <div className='mt-2 mb-4 text-xl font-bold flex items-center justify-between'>
        <span>{type}</span>

        {popularityType ?
          (
            <span className='text-[12px] bg-[#FBBF24] text-[#78350F] px-4 py-1 rounded-lg'>
              {popularity}
            </span>
          )
          : null
        }

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