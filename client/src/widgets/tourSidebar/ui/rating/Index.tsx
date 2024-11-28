import {Container} from "@/widgets/tourSidebar/ui/rating/Container.tsx";
import {FC} from "react";
import {Option} from "@/widgets/tourSidebar/ui/rating/Option.tsx";
import {RatingContainer} from "@/widgets/tourSidebar/ui/rating/RatingContainer.tsx";
import {Marker} from "@/widgets/tourSidebar/ui/rating/Marker.tsx";
import {RatingDescription} from "@/widgets/tourSidebar/ui/rating/RatingDescription.tsx";

type RatingProps = {
    option: string
    rating: string
    ratingCount: number
}

export const Rating: FC<RatingProps> = ({option, rating, ratingCount}) => {
    return (
        <Container>
            <Option option={option}/>
            <RatingContainer>
                <Marker value={rating}/>
                <RatingDescription value={ratingCount}/>
            </RatingContainer>
        </Container>
    );
};