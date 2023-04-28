import React from 'react'
import Nav from '../components/Nav'

const Contact = () => {
    return (
        <section>
            <Nav />

            <div className="container">
                <form className='p-6 md:p-8 border shadow-lg mx-auto my-[9rem] w-full sm:w-[85%] md:w-[70%] lg:w-[60%] max-w-[600px] rounded-lg'>
                    <div className='flex flex-col md:flex-row md:items-center gap-4 mb-4'>
                        <div className='flex flex-col flex-1'>
                            <span>First name*</span>
                            <input type="text" className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <span>Last name*</span>
                            <input type="text" className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                        </div>
                    </div>

                    <div className='flex flex-col flex-1 mb-4'>
                        <span>Work email address*</span>
                        <input type="email" className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                    </div>

                    <div className='flex flex-col flex-1 mb-4'>
                        <span>Work phone number*</span>
                        <input type="text" className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center gap-4 mb-4'>
                        <div className='flex flex-col flex-1'>
                            <span>Company name*</span>
                            <input type="text" className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                        </div>

                        <div className='flex flex-col flex-1'>
                            <span>Your Role</span>
                            <select className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:items-center gap-4 mb-4'>
                        <div className='flex flex-col flex-1'>
                            <span>Company size*</span>
                            <select className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                        </div>

                        <div className='flex flex-col flex-1'>
                            <span>Country*</span>
                            <select className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                        </div>
                    </div>

                    <div className='flex flex-col flex-1 mb-8'>
                        <span>How did you hear about us?*</span>
                        <select className='h-[40px] border rounded px-2 outline-none text-[16px] w-full mt-2' />
                    </div>

                    <button type='submit' className='bg-[#454ADE] w-full text-[#ffffff] rounded-lg py-3 px-6 mb-4'>
                        Submit Form
                    </button>

                    <div className='text-[14px] text-center'l>
                        <span>No credit card required. No need to install software.</span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact