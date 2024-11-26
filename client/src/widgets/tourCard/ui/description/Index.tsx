import {FC} from "react";
import {Container} from "@/widgets/tourCard/ui/description/Container.tsx";
import {TitleContainer} from "@/widgets/tourCard/ui/description/TitleContainer.tsx";
import {Title} from "@/widgets/tourCard/ui/description/Title.tsx";
import {Text} from "@/widgets/tourCard/ui/description/Text.tsx";
import {GroupPrice} from "@/shared/ui";

type DescriptionProps = {
    title: string
    shortDescription: string
    price: number
}

export const Description: FC<DescriptionProps> = ({title, shortDescription, price}) => {
    return (
        <Container>
            <TitleContainer>
                <Title value={title}/>
                <Text value={shortDescription}/>
            </TitleContainer>
            <GroupPrice price={price}/>
        </Container>
    );
};