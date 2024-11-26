import {FC} from "react";
import {Carousel, CarouselContainer, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/shared/ui";
import {Card, CardContent} from "@/shared/ui/card";

type TourCarouselProps = {
    images: string[]
    map: string | undefined
}

export const TourCarousel: FC<TourCarouselProps> = ({images, map}) => {
    return (
        <div className={"flex flex-row my-8"}>
            <Card>
                <CardContent className={"w-64 bg-cover"} style={{backgroundImage: `url(${map})`}}>
                </CardContent>
            </Card>
            <CarouselContainer>
                <Carousel>
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="basis-1/3">
                                <Card>
                                    <CardContent className={"rounded-2xl bg-cover"} style={{backgroundImage: `url(${image})`}}>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </CarouselContainer>
        </div>
    );
};