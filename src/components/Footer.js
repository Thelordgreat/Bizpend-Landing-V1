import React from 'react'
import { AiOutlineTwitter, AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-[#17181D] pt-[5rem] pb-[3rem]'>
      <div className="container">
        <div className='grid grid-cols-5 gap-4 pb-8 mb-8 border-b border-[#334155]'>
          <div className='col-span-2 text-white font-bold text-[18px]'>
            LogoIpsum
          </div>

          <div>
            <span className='text-white font-bold text-[20px]'>Quick Links</span>
            <ul className='text-[#CBD5E1] text-[14px] flex flex-col gap-4 mt-3'>
              <li>Pricing</li>
              <li>Features</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <span className='text-white font-bold text-[20px]'>Company</span>
            <ul className='text-[#CBD5E1] text-[14px] flex flex-col gap-4 mt-3'>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div className=''>
            <span className='text-white font-bold text-[20px]'>Contact</span>
            <div className='text-[#CBD5E1] text-[14px] flex flex-col gap-4 mt-3'>
              <a href='/' className='flex items-center gap-2'>
                <AiOutlineTwitter fontSize={18} />
                Twitter
              </a>

              <a href='/' className='flex items-center gap-2'>
                <AiFillInstagram fontSize={18} />
                Instagram
              </a>

              <a href='/' className='flex items-center gap-2'>
                <FaLinkedinIn fontSize={18} />
                LinkedIn
              </a>

              <a href='/' className='flex items-center gap-2'>
                <AiFillFacebook fontSize={18} />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-center text-white text-[14px]'>
          <span>2023 Bizpend. All right reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer