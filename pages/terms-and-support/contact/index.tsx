import CustomButton from '@/components/CustomButton';
import ParentDiv from '@/components/ParentDiv'
import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Contact Us</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full flex flex-col md:flex-row gap-[40px]'>
                        <div className='w-full md:w-[30%]'>
                            <div className='text-small text-gray-300 font-[700]'>Support Email</div>
                            <div className='text-small text-gray-300'>support@swaphere.com</div>

                        </div>
                        <div className='w-full md:w-[70%] flex flex-col gap-[20px]'>
                            <div className='w-full flex flex-col gap-[10px]'>
                                <div className='text-small text-gray-300 font-[700]'>Your Name</div>
                                <input
                                    type="text"
                                    className={`flex-grow text-primary border-[1px] border-stroke placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline-none text-medium`}
                                    placeholder={"Type here your name"}
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-[10px]'>
                                <div className='text-small text-gray-300 font-[700]'>Email</div>
                                <input
                                    type="email"
                                    className={`flex-grow text-primary border-[1px] border-stroke placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                    placeholder={"Type here your email"}
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-[10px]'>
                                <div className='text-small text-gray-300 font-[700]'>Subject</div>
                                <input
                                    type="text"
                                    className={`flex-grow text-primary border-[1px] border-stroke placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                    placeholder='Type here your subject'
                                    onChange={e => setSubject(e.target.value)}
                                    value={subject}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-[10px]'>
                                <div className='text-small text-gray-300 font-[700]'>Message</div>
                                <textarea
                                    className={`flex-grow text-primary border-[1px] border-stroke placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium resize-none`}
                                    placeholder='Type here your message'
                                    onChange={e => setMessage(e.target.value)}
                                    value={message}
                                    rows={4}
                                />
                            </div>
                            <div className='w-full'>
                                <CustomButton title='Send Message' size='large' className='w-full sm:w-fit' />
                            </div>
                        </div>
                    </div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default Contact