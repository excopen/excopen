import {FC} from "react";
import users from "@/shared/assets/icons/users.svg";
import back from "@/shared/assets/icons/back.svg";
import wallet from "@/shared/assets/icons/wallet.svg";
import {Item} from "@/widgets/tourDescription/ui/details/item";
import {Heading} from "@/widgets/tourDescription/ui/details/components";
import {SubContainer, Container} from "@/widgets/tourDescription/ui/details/container";

export const Details: FC = () => {
    return (
        <Container>
            <Heading/>
            <SubContainer>
                <Item
                    title={"Групповой формат"}
                    description={"С вами будут другие участники, группа до 10 человек"}
                    image={users}
                />
                <Item
                    title={"Бесплатная отмена"}
                    description={"за 48 часов"}
                    image={back}
                />
                <Item
                    title={"Предоплата 25%,"}
                    description={"остальное – на месте"}
                    image={wallet}
                />
            </SubContainer>
        </Container>
    );
};