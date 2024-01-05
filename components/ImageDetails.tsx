"use client";

import React, {useState} from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';


type imgProps = {
  images: string[],
}

const ImageDetails = ({images}:imgProps) => {

  const [bigImage, setBigImage] = useState<string>(images[0]);

  const handleBigImage = (image: string) => {
    //alert("image chnaged");
    setBigImage(image);
  }

  
  return (
    <div className="w-full flex flex-col items-start space-y-3">
      {/* Images */}
      <div>
        {/* Bigger image section */}
        <Image
          src={bigImage}
          alt="product_name"
          width={190}
          height={200}
          className="overflow-hidden h-full w-full self-center shadow-md bg-gradient-to-b from-slate-200 to-slate-500 border rounded-lg object-contain object-center"
      />
      </div>

      <div className="flex space-x-0 items-center">
        {/* grid of smaller images */}
        {
          images?.map((image: string, index: number) => (
            <div key={index}>
              <Image
                onClick={() => handleBigImage(image)}
                src={image}
                alt={`product_image_${index}`}
                width={70}
                height={50}
                className={cn("overflow-hidden h-full w-full self-center border rounded-lg cursor-pointer object-contain object-center")}
              />
            </div>
        ))}
      </div>
    </div>
  )
}

export default ImageDetails