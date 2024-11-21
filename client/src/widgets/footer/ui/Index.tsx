import {FC} from "react";
import {Navigation} from "@/widgets/footer/ui/Navigation.tsx";
import {Info} from "@/widgets/footer/ui/Info.tsx";
import {Separator} from "@/widgets/footer/ui/Separator.tsx";
import {Annotation} from "@/widgets/footer/ui/Annotation.tsx";
import {Support} from "@/widgets/footer/ui/Support.tsx";
import {InfoContainer} from "@/widgets/footer/ui/InfoContainer.tsx";
import {FooterContainer} from "@/widgets/footer/ui/FooterContainer.tsx";

export const Footer: FC = () => {
    return (
        <FooterContainer>
            <InfoContainer>
                <Navigation/>
                <Info/>
            </InfoContainer>
            <Separator/>
            <Annotation/>
            <Support/>
        </FooterContainer>
    );
};