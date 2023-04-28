import React from 'react'
import Nav from '../components/Nav'

const Contact = () => {
    return (
        <section>
            <Nav />

            <div className="container">
                <form className='p-6 border shadow-lg mx-auto my-auto w-[60%] max-w-[700px]'>
                    <div>
                        <div className=''>
                            <span>First name*</span>
                            <input type="text" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact