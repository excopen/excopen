import {Carousel, CarouselContainer, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/shared/ui";
import {Card, CardContent} from "@/shared/ui/card";
import {FC} from "react";

type CarouselImageProps = {
    images: string[]
}

export const CarouselImage: FC<CarouselImageProps> = ({images}) => {
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

                {/* Стрелки навигации */}
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </CarouselContainer>
    );
};