import {Card, CardContent} from "@/shared/ui/card";
import {FC} from "react";
import {CarouselContainer} from "@/shared/ui/carousel/CarouselContainer.tsx";
import {CarouselContent} from "@/shared/ui/carousel/CarouselContent.tsx";
import {CarouselItem} from "@/shared/ui/carousel/CarouselItem.tsx";
import {CarouselPrevious} from "@/shared/ui/carousel/CarouselPrevious.tsx";
import {CarouselNext} from "@/shared/ui/carousel/CarouselNext.tsx";
import {Carousel} from "@/shared/ui/carousel/Carousel.tsx";

type CarouselProps = {
    images: string[]
}

export const Index: FC<CarouselProps> = ({images}) => {
    return (
        <CarouselContainer>
            <Carousel>
                <CarouselContent>
                    {images.map(image => (
                        <CarouselItem key={image} className="basis-1/3 md:basis-1/4">
                            <Card>
                                <CardContent className={"bg-cover"} style={{backgroundImage: `url(${image})`}}>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CarouselContainer>
    );
};