import {FC} from "react";
import {locationsArray} from "@/widgets/locationsList/assets/locationsArray.ts";
import {LocationCard} from "@/widgets/locationCard";
import {Button} from "@/shared/ui";
import {Heading} from "@/widgets/locationsList/ui/Heading.tsx";
import {ListContainer} from "@/widgets/locationsList/ui/ListContainer.tsx";
import {Container} from "@/widgets/locationsList/ui/Container.tsx";

export const LocationsList: FC = () => {
    return (
        <Container>
            <Heading>Самые популярные направления</Heading>
            <ListContainer>
                {locationsArray.map(location => (
                    <LocationCard
                        country={location.country}
                        city={location.city}
                        tourCount={location.tourCount}
                        image={location.image}
                    />
                ))}
            </ListContainer>
            <Button variant={"outline"} size={"lg"}>перейти к списку городов</Button>
        </Container>
    );
};