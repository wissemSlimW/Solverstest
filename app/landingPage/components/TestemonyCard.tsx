'use client'

import { LeftArrow, RightArrow } from "@/app/icons"
import { Carousel, IconButton } from "@material-tailwind/react"

export const TestemonyCard = () => {
    const data = [
        { image: '/img1.webp', name: 'James', text: 'I have tested out your app and I really liked how simple,detailed and easy to use it is.' },
        { image: '/img2.jpg', name: 'Emilie', text: 'I appreciate the feedback regarding the CV. It’s concise and straight to he point.This is a great tool!' },
        { image: '/img3.jpeg', name: 'Anderson', text: 'Your app really helped me to evaluate my chances for a job I was applying for.I’ll use it for my future applications.' }
    ]
    return (
        <div className=" h-full w-full ">
            <Carousel loop autoplay
            
                prevArrow={({ handlePrev }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute bottom-0 left-[calc(50%-45px)]  p-0"
                    >
                        <LeftArrow />
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="white"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute bottom-0 right-[calc(50%-45px)]  p-0"
                    >
                        <RightArrow />
                    </IconButton>
                )}
                navigation={()=><></>}
                className="rounded-xl " transition={{ duration: 2 }} autoplayDelay={5000}>
                {data.map((item, i) => <div className="flex flex-col w-full h-full gap-1  place-items-center" key={i}>
                    <img className="w-[62px] h-[62px] rounded-full object-cover" src={item.image} />
                    <span className="text-[#343537] text-2xl">{item.name}</span>
                    <span className="text-[#A5A6A7] text-center">{item.text}</span>
                </div>)}
            </Carousel>
        </div>
    )
}