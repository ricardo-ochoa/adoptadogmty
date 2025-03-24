import React from 'react';
import Image from 'next/image';
import 'animate.css';

interface ImageBannerProps {
  imageUrl: string;
  altText?: string;
  height?: number;
  width?: number;
  priority?: boolean;
  className?: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({
  imageUrl,
  altText = "Banner image",
  height = 400,
  width = 1200,
  priority = true,
  className = ""
}) => {
  return (
    <div className={`w-full px-2 flex justify-center mb-8 animate__animated animate__fadeIn ${className}`}>
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={altText}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default ImageBanner;