"use client"
import { FormikProps } from 'formik'
import React from 'react'
import { TextInput } from '..'
import { Button, Checkbox } from '@material-tailwind/react'
import Link from 'next/link'

export const LoginForm = ({ formik }: { formik: FormikProps<LoginFormProps> }) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='flex flex-col w-full gap-10'>
                <div className='lg:flex  w-full lg:gap-8'>
                    <div className='w-full lg:w-1/2 pb-10 lg:pb-0'>
                        <TextInput label='FirstName' value={formik.values.firstName}
                            onChange={formik.handleChange} fieldName='firstName' placeholder='Jane'
                            {...{ formik }} />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <TextInput label='LastName' value={formik.values.lastName}
                            onChange={formik.handleChange} fieldName='lastName' placeholder='Doe'
                            {...{ formik }} />
                    </div>
                </div>
                <div>
                    <TextInput label='Email' value={formik.values.email}
                        onChange={formik.handleChange} fieldName='email' placeholder='Jane@gmail.com'
                        {...{ formik }} />
                </div>
                <div>
                    <TextInput label='Password' value={formik.values.password}
                        onChange={formik.handleChange} type='password' fieldName='password' placeholder='********'
                        {...{ formik }} />
                </div>
                <div className='flex place-items-center [&>div>label]:text-[12px] [&>div>:first-child]:p-[2px] [&>div>:first-child]:mr-[9px]'>
                    <Checkbox label="Subscribe to our monthly newsletter" className='' checked={formik.values.sub} onChange={() => formik.setFieldValue('sub', !formik.values.sub)} crossOrigin={""}></Checkbox>
                </div>
                <span className="text-[12px] text-[#4C4D4F80]">By clicking below you agree to our <span className=" text-[#4C4D4F]">Terms of Service</span> and <span className=" text-[#4C4D4F]">Privacy Policy</span></span>
            </div>
            <div className='mt-[14px] mb-2'>
                <Button fullWidth type='submit' className='rounded-3xl shadow-none hover:shadow-none
         border-[1px] border-solid border-[#4C4D4F] font-Cabin text-sm
         text-white normal-case flex place-content-center gap-5 place-items-center bg-black' >Sign up</Button>

            </div>
            <div className='flex place-content-center'>
                <span className="text-[12px] text-[#4C4D4F80]">Already have an account? <Link href='/api/auth/login'><span className=" text-[#4C4D4F]"> Log in</span> </Link> </span>
            </div>

        </form>
    )
}
