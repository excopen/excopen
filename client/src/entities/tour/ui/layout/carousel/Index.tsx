import {FC} from "react";
import {ImagesCarousel, MapView} from "@/shared/ui";
import {Card} from "@/shared/ui/card";
import {YandexMapCoordinates} from "@/shared/types";

type CarouselProps = {
    images: string[]
    coordinates: YandexMapCoordinates
}

export const Index: FC<CarouselProps> = ({images, coordinates}) => {
    return (
        <div className={"flex flex-col max-lg:items-center gap-4 lg:flex-row my-8"}>
            <Card className={"h-full"}>
                <MapView value={coordinates}/>
            </Card>
            <ImagesCarousel images={images}/>
        </div>
    );
};