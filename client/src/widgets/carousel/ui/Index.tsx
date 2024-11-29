import {FC} from "react";
import {ImagesCarousel} from "@/shared/ui";
import {Card, CardContent} from "@/shared/ui/card";

type CarouselProps = {
    images: string[]
    map: string | undefined
}

export const Index: FC<CarouselProps> = ({images, map}) => {
    return (
        <div className={"flex flex-row my-8"}>
            <Card>
                <CardContent
                    className={"w-[260px] bg-cover mr-1 rounded-2xl"}
                    style={{backgroundImage: `url(${map})`}}
                >
                </CardContent>
            </Card>
            <ImagesCarousel images={images}/>
        </div>
    );
};