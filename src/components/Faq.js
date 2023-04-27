import React, { useState } from 'react'
import { FAQ } from '../constants'
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi"

const Faq = () => {

    const [selected, setSelected] = useState(false);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(!selected)
        }

        setSelected(i)
    }

    return (
        <section className='py-[6rem]'>
            <div className="container">
                <div className='flex flex-col md:flex-row gap-[40px]'>
                    <div className='flex-1'>
                        <div className='lg:w-[83%]'>
                            <h2 className='text-4xl font-bold mb-4'>
                                Frequently Asked Questions
                            </h2>

                            <p
                                style={{
                                    color: "rgba(0, 0, 0, 0.7)"
                                }}
                                className='text-[16px] mb-4'
                            >
                                Giving answers to all the questions you might possibly have. If you still have questions, do reach out to us
                            </p>

                            <button className='px-4 py-2 border border-[#454ADE] text-[#454ADE] rounded-lg cursor-pointer text-[14px]'>
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className='flex-1 border-t'>

                        {FAQ.map((item, i) => {
                            return (
                                <div
                                    key={item.id}
                                    className="py-4 border-b"
                                >
                                    <div
                                        className="text-[17px] flex items-center justify-between font-semibold cursor-pointer"
                                        onClick={() => toggle(i)}
                                    >
                                        {item.question}
                                        {selected === i ?
                                            <TfiAngleUp /> : <TfiAngleDown />}
                                    </div>

                                    <div className={selected === i ? "content show" : "content"}>
                                        {item.text}
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                </div>
            </div>
        </section >
    )
}

export default Faq