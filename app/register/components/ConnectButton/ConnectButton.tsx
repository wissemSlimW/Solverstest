'use client'
import { Button } from '@material-tailwind/react'
import React, { ReactElement } from 'react'

export const ConnectButton = ({ text, icon }: { icon: ReactElement, text: string }) => {
    return (
        <Button fullWidth className='rounded-3xl shadow-none hover:shadow-none
         border-[1px] border-solid border-[#4C4D4F] font-Cabin text-sm
         text-[#4C4D4F] normal-case flex place-content-center gap-5 place-items-center bg-white' >{icon}{text}</Button>
    )
}
