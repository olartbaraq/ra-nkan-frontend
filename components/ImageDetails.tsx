"use client";

import React, {useState} from 'react'
import Image from 'next/image'


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
    <div className="py-10 border-b border-gray-200 flex space-x-10 items-center w-full">
          <div className="w-full flex flex-col items-start space-y-3">
            {/* Images */}
            <div>
              {/* Bigger image section */}
              {bigImage && (
              <Image
                src={bigImage}
                alt="product_name"
                width={150}
                height={150}
                className="overflow-hidden h-full w-full self-center shadow-md bg-gradient-to-b from-slate-200 to-slate-500 border rounded-md object-contain object-center"
            />
          )}
            </div>

            <div className="flex space-x-0 items-center">
              {/* grid of smaller images */}
              {images &&
                images?.map((image: string, index: number) => (
                  <div key={index}>
                    <Image
                      onClick={() => handleBigImage(image)}
                      src={image}
                      alt={`product_image_${index}`}
                      width={70}
                      height={70}
                      className="overflow-hidden h-full w-full self-center border rounded-md cursor-pointer object-contain object-center"
                    />
                  </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default ImageDetails