import {FC} from 'react';
import {Container} from "@/widgets/tourCard/ui/details/Container.tsx";
import {PriceContainerVariant} from "@/shared/types";
import {CardButton, GroupPrice, TourParams} from "@/shared/ui";

type DetailsProps = {
    duration: string
    routeLength: number
    price: number
}

export const Details: FC<DetailsProps> = ({duration, routeLength, price}) => {
    return (
        <Container>
            <TourParams duration={duration} length={routeLength}/>
            <GroupPrice price={price} variant={PriceContainerVariant.MOBILE} />
            <CardButton/>
        </Container>
    );
};