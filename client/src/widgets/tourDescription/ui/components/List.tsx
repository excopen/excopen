import {FC, ReactNode} from "react";

type ListProps = {
    children: ReactNode
}

export const List: FC<ListProps> = ({children}) => {
    return (
        <ul className={"list-disc px-6"}>
            {children}
        </ul>
    );
};