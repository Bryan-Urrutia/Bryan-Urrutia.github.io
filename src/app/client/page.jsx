"use client";
import Image from 'next/image'
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../../components/ui/carousel';
import Link from 'next/link'

const Page = () => {
    const autoplayPlugin = Autoplay({
        delay: 5000,
    });
    
    return (
        <section className='h-[550px] bg-hero bg-no-repeat bg-cover bg-center mt-10'>
            <Carousel className="container flex h-full justify-center items-center p-2" plugins={[autoplayPlugin]}>
                <div className='w-full'>
                    <CarouselContent className='w-full'>
                        <CarouselItem className="basis-full">
                            <div className='h-[600px] bg-hero_store1 bg-no-repeat bg-cover p-10 items-end rounded-md'>
                                <div className='w-full items-center justify-center text-left h-full text-white dark:text-white'>
                                    <div className='w-[500px] h-full flex flex-col justify-center'>
                                        <div className='font-semibold flex items-center uppercase'>
                                            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
                                            <div>Nueva moda</div>
                                        </div>

                                        <h1 className='text-[50px] leading-[1.1] font-light mb-4'>Venta especial de Otoño</h1>
                                        <span className='font-bold text-[20px] uppercase'>Mujeres</span>
                                        <Link href={"/"} className='self-start mt-4 uppercase font-semibold border-b-2 border-primary'>Descubre más</Link>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="basis-full">
                            <div className='h-[600px] bg-hero_store2 bg-no-repeat bg-cover p-10 items-end rounded-md'>
                                <div className='w-full flex justify-end text-right h-full text-white'>
                                    <div className='w-[500px] h-full flex flex-col justify-center'>
                                        <div className='font-semibold flex items-center justify-end uppercase'>
                                            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
                                            <div>Nueva moda</div>
                                        </div>

                                        <h1 className='text-[50px] leading-[1.1] font-light mb-4'>Venta especial de Otoño</h1>
                                        <span className='font-bold text-[20px] uppercase'>Mujeres</span>
                                        <Link href={"/"} className='self-end mt-4 uppercase font-semibold border-b-2 border-primary'>Descubre más</Link>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </div>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}

export default Page;
