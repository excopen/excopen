import {useState} from "react";

type ReturnType = {
    images: File | null
    update: ()
}

export const useImageLoader = () => {


    const [images, setImages] = useState<(File | null)[]>(Array(5).fill(null));

    const handleImageChange = (index: number, file: File) => {
        setImages((prev) => {
            const newImages = [...prev]
            newImages[index] = file
            return newImages
        })
    }

}