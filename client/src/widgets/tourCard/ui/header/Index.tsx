import {Container} from "@/widgets/tourCard/ui/header/Container.tsx";
import {FC} from "react";
import {FavouriteButton, Rating} from "@/shared/ui";

type HeaderProps = {
    rating: string
    ratingCount: number
}

export const Header: FC<HeaderProps> = ({rating, ratingCount}) => {
    return (
        <Container>
            <Rating rating={rating} ratingCount={ratingCount} />
            <FavouriteButton/>
        </Container>
    );
};