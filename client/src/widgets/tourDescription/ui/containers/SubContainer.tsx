import {FC, ReactNode} from "react";

type SubContainerProps = {
    children: ReactNode
}

export const SubContainer: FC<SubContainerProps> = ({children}) => {
    return (
        <div className={"flex flex-col gap-2 w-full bg-grayscale-0 rounded-2xl p-6 text-grayscale-500 text-sm"}>
            {children}
        </div>
    );
};