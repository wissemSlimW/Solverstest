import React from 'react'
import { VideoCard } from './components/VideoCard'
import { Upload } from './components/Upload'
import { TestemonyCard } from './components/TestemonyCard'

const LandingPage = () => {
    return (
        <div className=' overflow-auto'>
            <div className='w-full flex flex-1'>
                <div className='md:flex mx-auto w-full md:w-11/12 lg:w-11/12 xl:w-10/12 lg:gap-10  gap-5 py-[50px]'>
                    <div className='flex flex-col w-full lg:w-1/2 gap-10 pb-10 md:pb-0'>
                        <div className='mx-auto overflow-hidden w-4/5 md:w-full aspect-video rounded-[14px]'>
                            <VideoCard />
                        </div>
                        <div className='mx-auto w-4/5 md:w-full aspect-video rounded-[14px] p-7 overflow-hidden bg-white'>
                            <TestemonyCard />
                        </div>
                    </div>
                    <div className='flex flex-col w-full  lg:w-1/2  gap-10'>
                        <label for="formFile" className='flex flex-col mx-auto w-4/5 md:w-full  place-items-center aspect-video place-content-center
                            cursor-pointer bg-gradient-to-br from-[#DBB898] to-[#9DC1CE] rounded-[14px]'>
                            <span className='border-solid border-2 border-[#343537] p-[19.5px] rounded-full'><Upload /></span>
                            <span className='text-[#343537] text-[34px]'>Upload CV</span>
                            <span className='text-[#343537] text-base'>( PDF or DOCX )</span>
                            <input id='formFile' type='file' accept='application/pdf,application/msword' className='hidden' />
                        </label>
                        <div className='flex place-content-center
                     place-items-center mx-auto w-4/5 md:w-full aspect-video
                      bg-gradient-to-br from-[#DBB898] to-[#9DC1CE] rounded-[14px]'>
                            <span className="text-[#343537] text-[40px] ">
                                Create CV with AI
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default LandingPage