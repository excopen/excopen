import {FC, ReactNode} from "react";

type SideBarProps = {
    children: ReactNode
}

export const SideBar: FC<SideBarProps> = ({children}) => {
    return (
        <div className={"flex flex-col gap-4 max-md:items-center"}>
            {children}
        </div>
    );
};