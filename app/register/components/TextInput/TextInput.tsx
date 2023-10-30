"use client"
import { getFormErrorMessage, isFormFieldValid } from '@/app/utils/utils'
import { Input } from '@material-tailwind/react'
import { FormikProps } from 'formik'
import React from 'react'

export const TextInput = ({ label, onChange, value, placeholder = '', type = 'text', fieldName, formik }: {
    label: string,
    placeholder?: string,
    value: string,
    type?: 'text' | 'number' | 'password'
    fieldName: keyof LoginFormProps,
    formik: FormikProps<LoginFormProps>
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    return (<>
        <Input className='w-full ' variant="static" crossOrigin={''}
            labelProps={{ className: '[&&&]:text-[#4C4D4F] font-Cabin' }}
            name={fieldName} error={isFormFieldValid(formik, fieldName)}
            {...{ label, onChange, value, placeholder, type, }}
        />
        {getFormErrorMessage(formik, fieldName)}
    </>)
}
