import {FC} from 'react';
import {ProfileButton, SearchByLocationInput} from "@/shared/ui";
import {useSearchTourContext} from "@/features";

export const Header: FC = () => {

    const {setLocation, searchParams} = useSearchTourContext()
    const disabled = !searchParams.location

    return (
        <header>
            <SearchByLocationInput setter={setLocation}/>
            <ProfileButton disabled={disabled}>
                Профиль
            </ProfileButton>
        </header>
    );
};