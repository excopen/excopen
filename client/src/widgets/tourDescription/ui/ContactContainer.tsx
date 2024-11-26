import {FC, ReactNode} from "react";

type ContactContainerProps = {
    children: ReactNode
}

export const ContactContainer: FC<ContactContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col gap-4"}>
            {children}
        </div>
    );
};