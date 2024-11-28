import {FC} from "react";
import {Container, InfoContainer} from "@/widgets/footer/ui/containers";
import {Annotation, Info, Navigation, Separator, Support} from "@/widgets/footer/ui/components";

export const Footer: FC = () => {
    return (
        <Container>
            <InfoContainer>
                <Navigation/>
                <Info/>
            </InfoContainer>
            <Separator/>
            <Annotation/>
            <Support/>
        </Container>
    );
};