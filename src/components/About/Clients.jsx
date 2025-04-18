'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import ProjectCard from '@/components/Work/ProjectCard';

const projectData = [
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'Nexa website',
        description: 'lorem ipsum dolor',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Nexa website',
        description: 'lorem ipsum dolor',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa website',
        description: 'lorem ipsum dolor',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa website',
        description: 'lorem ipsum dolor',
        link: '/',
        github: '/',
    }
]

const Clients = () => {
    return <section className='relative mb-12 xl:mb-48'>
        <div className="container mx-auto">
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Ultimos Proyectos</h2>
                <p className='subtitle mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link href='/projects'>
                    <Button>Todos los Proyectos</Button>
                </Link>
            </div>
            {/* slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 } }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                    {projectData.slice(0, 4).map((project, index) => {
                        return (<SwiperSlide key={index}>
                            <div>{project.name}</div>
                        </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </div>

    </section>
}

export default Clients