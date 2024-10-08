'use client'

import React, { useState, useEffect, useRef } from 'react'
import CarouselBackground from './CarouselBackground'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CarouselItem } from '@/interface/carousel'

interface PropsInterface {
    carouselContentList: CarouselItem[]
}

export const Carousel = (props: PropsInterface) => {
    const { carouselContentList } = props

    const carouselContentCount = carouselContentList.length

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % carouselContentCount
            )
        }, 6000)

        return () => clearInterval(timer)
    }, [currentImageIndex, carouselContentCount])

    const handleNext = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % carouselContentCount
        )
    }

    const handlePrev = () => {
        setCurrentImageIndex(
            (prevIndex) =>
                (prevIndex - 1 + carouselContentCount) % carouselContentCount
        )
    }

    const handleSelect = (index: number) => {
        setCurrentImageIndex(index)
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true)
        setStartX(e.touches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return
        const currentX = e.touches[0].clientX
        setTranslateX(currentX - startX)
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
        if (translateX > 50) {
            handlePrev()
        } else if (translateX < -50) {
            handleNext()
        }
        setTranslateX(0)
    }

    return (
        <section
            className="h-full flex flex-col grow font-vietnam relative "
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <CarouselBackground
                currentItemIndex={currentImageIndex}
                carouselData={carouselContentList}
            />

            <button
                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-125 duration-300 hidden md:block"
                onClick={handleNext}
            >
                <FaChevronRight size={30} />
            </button>

            <button
                className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-125 duration-300 hidden md:block"
                onClick={handlePrev}
            >
                <FaChevronLeft size={30} />
            </button>

            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-row space-x-1">
                {carouselContentList.map((carouselContent, index) => (
                    <button
                        key={carouselContent.image}
                        className={`rounded-full w-3 h-3 border cursor-pointer ${currentImageIndex === index ? 'bg-white' : ''}`}
                        onClick={() => handleSelect(index)}
                    />
                ))}
            </div>
        </section>
    )
}
