import * as React from "react";
import { cn } from "@/lib/utils"; // Helper para combinar clases

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

// Previous button
export function CarouselPrevious({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        >
            &#9664;
        </button>
    );
}

// Next button
export function CarouselNext({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
        >
            &#9654;
        </button>
    );
}
