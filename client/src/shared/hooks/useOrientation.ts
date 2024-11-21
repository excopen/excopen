import {useEffect, useState} from "react";
import {Orientation} from "@/shared/types";

export const useOrientation = (value: Orientation): Orientation => {

    const [orientation, setOrientation] = useState<Orientation>(Orientation.VERTICAL)

    const updateOrientation = () => {
        if (value === Orientation.VERTICAL) setOrientation(value)
        else {
            if (window.innerWidth < 1200) setOrientation(Orientation.VERTICAL)
            else setOrientation(Orientation.HORIZONTAL)
        }
    }

    useEffect(() => {

        updateOrientation();
        window.addEventListener("resize", updateOrientation);

        return () => {
            window.removeEventListener("resize", updateOrientation);
        };

    });

    return orientation;

}