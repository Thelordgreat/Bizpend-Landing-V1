import React from 'react'
import moneyHand from "../assets/money-in-hand-min.png"

const GetStarted = () => {
  return (
    <section className='bg-[#454ADE] pt-6 GetStarted'>
      <div className="container">
        <div className='flex flex-col md:flex-row items-center gap-[80px]'>
          <div className='flex-1 pt-8 md:pt-0'>
            <h2 className='text-3xl text-white font-bold'>
              Take control and visibility over your spending today!
            </h2>

            <div className='flex items-center gap-4 mt-6'>
              <button className='bg-[#ffffff] text-[#454ADE] rounded py-2 px-6'>
                Get started
              </button>
              <button className='bg-transparent border border-[#ffffff] rounded py-2 px-6 text-[#fff]'>
                Request a demo
              </button>
            </div>
          </div>

          <div className='flex-1'>
            <img
              src={moneyHand}
              alt="money in hand"
              className='h-[350px] md:h-[550px] ml-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted