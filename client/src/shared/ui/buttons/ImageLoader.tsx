import React, {FC, useEffect, useState} from "react";
import {CircleMinus, Download} from "lucide-react";
import {validateImage} from "@/shared/validate";

type ImageLoaderProps = {
    index: number
    file: File | null
    update: (index: number, file: File | null) => void
    size: "lg" | "sm"
}

export const ImageLoader: FC<ImageLoaderProps> = ({ index, file, update, size }) => {

    const [preview, setPreview] = useState<string | null>(
        file ? URL.createObjectURL(file) : null
    )

    const [isValid, setIsValid] = useState<boolean>(
        file ? validateImage(file) : false
    )

    useEffect(() => {
        if (file) setIsValid(validateImage(file))
    }, [file])

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
            update(index, file)
        }
    }

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        setPreview(null)
        update(index, null)
    }

    const containerStyles: string = [
        "relative group-hover:opacity-80 transition",
        size === "lg" ? "w-80 h-80" : "w-40 h-[156px]"
    ].join(" ")

    const labelStyles: string = [
        "relative flex justify-center items-center w-full h-full",
        "bg-grayscale-300 cursor-pointer rounded-xl transition hover:opacity-80"
    ].join(" ")

    return (
        <div className={containerStyles}>
            <label
                className={labelStyles}>
                {preview && isValid ? (
                    <img
                        alt="tour"
                        className="w-full h-full rounded-xl bg-cover bg-center"
                        src={preview}
                    />
                ) : (
                    <div className="flex flex-col gap-2 items-center text-center">
                        <Download width={40} height={40} className="text-grayscale-400"/>
                        <span className="text-grayscale-400 text-base w-4/5">Загрузить изображение</span>
                    </div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                />
            </label>
            {preview && isValid &&
                <button className="absolute top-0 right-0 p-2">
                    <CircleMinus onClick={handleRemove} className={"text-grayscale-500 group"}/>
                </button>
            }
        </div>
    );
}