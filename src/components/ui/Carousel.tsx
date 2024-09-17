import * as React from "react";
import { cn } from "@/lib/utils"; // Helper para combinar clases
import { ChevronLeft, ChevronRight } from "lucide-react";

// Carousel wrapper
export function Carousel({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("relative overflow-hidden", className)} {...props}>
            {children}
        </div>
    );
}

// Carousel content (slides container)
export function CarouselContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("flex transition-transform duration-500 ease-out", className)} {...props}>
            {children}
        </div>
    );
}

// Carousel individual item
export function CarouselItem({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("min-w-full", className)} {...props}>
            {children}
        </div>
    );
}

export function CarouselPrevious({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 left-1 transform -translate-y-1/2 p-1 bg-gray-100 text-black rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out"
            aria-label="Anterior"
        >
            <ChevronLeft size={24} />
        </button>
    );
}

// Botón para ir al siguiente slide
export function CarouselNext({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 right-1 transform -translate-y-1/2 p-1 bg-gray-100 text-black rounded-full shadow-lg hover:bg-gray-50/60 transition-all duration-300 ease-in-out"
            aria-label="Siguiente"
        >
            <ChevronRight size={24} />
        </button>
    );
}
