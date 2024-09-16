/* eslint-disable @next/next/no-img-element */
"use client"
import * as React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/Card/Card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/Carousel"

export function ImageCarousel({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    return (
        <Carousel className="w-full relative overflow-hidden">
            <CarouselContent
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Mueve las imágenes según el índice actual
            >
                {images.map((image, index) => (
                    <CarouselItem key={index}>
                        <CardContent className="flex aspect-square items-center justify-center">
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </CardContent>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {images.length > 1 && (
                <>
                    <CarouselPrevious
                        onClick={handlePrevious}
                    />
                    <CarouselNext
                        onClick={handleNext}
                    />
                </>
            )}
        </Carousel>
    )
}
