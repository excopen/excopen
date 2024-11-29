import {FC} from "react";
import {ITour} from "@/shared/types";
import {Details} from "@/widgets/tourDescription/ui/details";
import {ButtonContainer, ContactContainer, Container, SubContainer} from "@/widgets/tourDescription/ui/containers";
import {BoldText, Heading, List} from "@/widgets/tourDescription/ui/components";
import {ContactButton, TelegramButton, VKButton} from "@/widgets/tourDescription/ui/buttons";

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