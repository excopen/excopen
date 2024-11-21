import {FC, ReactNode} from 'react';

type InfoContainerProps = {
    children: ReactNode
}

export const InfoContainer: FC<InfoContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col max-lg:gap-4 lg:flex-row justify-between px-4 md:px-32 xl:px-56"}>
            {children}
        </div>
    );
};