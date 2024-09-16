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
        <Carousel className="w-full max-w-lg relative overflow-hidden">
            <CarouselContent
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Mueve las imágenes según el índice actual
            >
                {images.map((image, index) => (
                    <CarouselItem key={index} className="min-w-full">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Mostrar botones solo si hay más de una imagen */}
            {images.length > 1 && (
                <>
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2">
                        <CarouselPrevious
                            onClick={handlePrevious}
                        />
                    </div>
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-2">
                        <CarouselNext
                            onClick={handleNext}
                        />
                    </div>
                </>
            )}
        </Carousel>
    )
}
