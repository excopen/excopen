import { FC } from "react";
import style from "./style.module.css";
import { cn } from "@/app/lib/utils.ts";
import {lettersArray} from "@/widgets/cities/utils";

type IndexProps = {
    defaultValue?: string
    location: string
    setLocation: (value: string) => void
    isActive: boolean
};

export const Index: FC<IndexProps> = ({ defaultValue= "А", location, setLocation, isActive }) => {

    if (defaultValue && !location) setLocation(defaultValue)

    const clickHandler = (newValue: string) => setLocation(newValue)

    return (
        <div className={style.container}>
            {lettersArray.map((letter) => (
                <span
                    key={letter}
                    onClick={() => clickHandler(letter)}
                    className={cn(
                        location === letter && !isActive ? style.active : style.letter,
                        letter !== "Я" && style.border
                    )}
                >
                    {letter}
                </span>
            ))}
        </div>
    );
};