import {FC} from 'react';
import {ProfileButton} from "@/widgets/header/ui/ProfileButton.tsx";
import {HeaderContainer} from "@/widgets/header/ui/HeaderContainer.tsx";
import logo from "@/shared/assets/icons/logo.svg"

export const Header: FC = () => {

    return (
        <HeaderContainer>
            <img alt={"logo"} width={100} height={30} src={logo}/>
            <ProfileButton/>
        </HeaderContainer>
    );
};