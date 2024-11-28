import { FC } from "react";
import {Container, Content} from "@/widgets/locationCard/ui/containers";
import {City, Country, Gradient, TourCount} from "@/widgets/locationCard/ui/components";

type LocationCardProps = {
    country: string;
    city: string;
    tourCount: number;
    image: string;
};

export const LocationCard: FC<LocationCardProps> = ({ country, city, tourCount, image }) => {
    return (
        <Container image={image}>
            <Gradient/>
            <Content>
                <Country country={country}/>
                <City city={city}/>
                <TourCount count={tourCount}/>
            </Content>
        </Container>
    );
};