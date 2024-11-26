import {FC} from 'react';
import {ProfileButton} from "@/widgets/header/ui/ProfileButton.tsx";
import {HeaderContainer} from "@/widgets/header/ui/HeaderContainer.tsx";
import logo from "@/shared/assets/icons/logo.svg"
import {Link} from "react-router-dom";
import {RouteNames} from "@/shared/types";

export const Header: FC = () => {

    return (
        <HeaderContainer>
            <Link to={`/${RouteNames.MAIN}`}>
                <img alt={"logo"} width={100} height={30} src={logo}/>
            </Link>
            <ProfileButton/>
        </HeaderContainer>
    );
};