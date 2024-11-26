import {FC} from "react";
import {ITour} from "@/shared/types";
import {CardButton, FavouriteButton, GroupPrice, Rating, TourParams} from "@/shared/ui";
import {Title} from "@/widgets/tourHeader/ui/Title.tsx";
import {Container} from "@/widgets/tourHeader/ui/Container.tsx";
import {StartCol} from "@/widgets/tourHeader/ui/StartCol.tsx";
import {EndCol} from "@/widgets/tourHeader/ui/EndCol.tsx";
import {ButtonGroup} from "@/widgets/tourHeader/ui/ButtonGroup.tsx";

type TourHeaderProps = {
    tour: ITour
}

export const TourHeader: FC<TourHeaderProps> = ({tour}) => {
    return (
        <Container>
            <StartCol>
                <Title value={tour.title} />
                <TourParams duration={tour.duration} length={tour.routeLength}/>
                <Rating rating={tour.rating} ratingCount={tour.ratingCount}/>
            </StartCol>
            <EndCol>
                <GroupPrice price={tour.price}/>
                <ButtonGroup>
                    <FavouriteButton/>
                    <CardButton/>
                </ButtonGroup>
            </EndCol>
        </Container>
    );
};