import {FC, ReactNode} from "react";

type SubContainerProps = {
    children: ReactNode
}

export const SubContainer: FC<SubContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col gap-2 p-6 bg-grayscale-0 rounded-2xl"}>
            {children}
        </div>
    );
};