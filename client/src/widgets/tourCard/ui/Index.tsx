import { FC } from "react";
import {Header} from "@/widgets/tourCard/ui/header";
import {Container, ContentContainer} from "@/widgets/tourCard/ui/containers";
import {Description} from "@/widgets/tourCard/ui/description";
import {Details} from "@/widgets/tourCard/ui/details";
import {ITour} from "@/shared/types";
import {ImagesCarousel} from "@/shared/ui";

type TourCardProps = {
    tour: ITour
};

export const TourCard: FC<TourCardProps> = ({tour}) => {
    return (
        <Container>
            <ImagesCarousel images={tour.images} />
            <ContentContainer>
                <Header
                    rating={tour.rating}
                    ratingCount={tour.ratingCount}
                />
                <Description
                    title={tour.title}
                    shortDescription={tour.shortDescription}
                    price={tour.price}
                />
                <Details
                    duration={tour.duration}
                    routeLength={tour.routeLength}
                    price={tour.price}
                />
            </ContentContainer>
        </Container>
    );
};