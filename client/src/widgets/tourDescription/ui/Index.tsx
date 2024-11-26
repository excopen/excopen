import {FC} from "react";
import {Container} from "@/widgets/tourDescription/ui/Container.tsx";
import {SubContainer} from "@/widgets/tourDescription/ui/SubContainer.tsx";
import {Heading} from "@/widgets/tourDescription/ui/Heading.tsx";
import {BoldText} from "@/widgets/tourDescription/ui/BoldText.tsx";
import {List} from "@/widgets/tourDescription/ui/List.tsx";
import {ContactContainer} from "@/widgets/tourDescription/ui/ContactContainer.tsx";
import {ContactButton} from "@/widgets/tourDescription/ui/ContactButton.tsx";
import {TelegramButton} from "@/widgets/tourDescription/ui/TelegramButton.tsx";
import {VKButton} from "@/widgets/tourDescription/ui/VKButton.tsx";
import {ButtonContainer} from "@/widgets/tourDescription/ui/ButtonContainer.tsx";
import {Details} from "@/widgets/tourDescription/ui/Details.tsx";
import {ITour} from "@/shared/types";

type TourDescriptionProps = {
    tour: ITour | undefined
}

export const TourDescription: FC<TourDescriptionProps> = ({tour}) => {
    return (
        <Container>

            <SubContainer>
                <p>{tour?.description?.mainInfo}</p>
            </SubContainer>

            <Heading value={"Что Вас ождает:"}/>

            <SubContainer>
                <p>{tour?.description?.whatToExpect}</p>
                <BoldText value={"Что вам встретится по пути"}/>
                <List>
                    {tour?.description?.locations.map((location, i) => (
                        <li key={i}>{location}</li>
                    ))}
                </List>
                <BoldText value={"О чём будем беседовать"}/>
                <List>
                    {tour?.description?.topics.map((topic, i) => (
                        <li key={i}>{topic}</li>
                    ))}
                </List>
            </SubContainer>

            <SubContainer>
                <Heading value={"Организационные детали"}/>
                <p>{tour?.description?.orgDetails}</p>
            </SubContainer>

            <SubContainer>
                <Heading value={"Место встречи"}/>
                <p>{tour?.description?.meetingPlace}</p>
            </SubContainer>

            <ContactContainer>
                <Heading value={"Остались вопросы?"} />
                <ButtonContainer>
                    <ContactButton link={"/"}/>
                    <TelegramButton link={tour?.contact?.telegram}/>
                    <VKButton link={tour?.contact?.vk}/>
                </ButtonContainer>
            </ContactContainer>

            <Details/>

        </Container>
    );
};