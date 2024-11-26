import contributor from "@/shared/assets/icons/contributor.svg";
import next from "@/shared/assets/icons/next-secondary.svg";
import {FC} from "react";
import {Name} from "@/widgets/tourSidebar/ui/contributorButton/Name.tsx";
import {Container} from "@/widgets/tourSidebar/ui/contributorButton/Container.tsx";
import {Description} from "@/widgets/tourSidebar/ui/contributorButton/Description.tsx";

type ContributorButtonProps = {
    name: string | undefined
    link: string
}

export const ContributorButton: FC<ContributorButtonProps> = ({name, link}) => {
    return (
        <Container link={link}>
            <img width={32} height={32} alt={"contributor"} src={contributor}/>
            <Description>
                <Name name={name}/>
                <span>Представитель команды гидов</span>
            </Description>
            <img width={24} height={24} alt={"next"} src={next}/>
        </Container>
    );
};