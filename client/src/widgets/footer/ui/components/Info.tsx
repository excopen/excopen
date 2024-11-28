import {FC} from "react";

export const Info: FC = () => {
    return (
        <div className={"flex flex-col lg:items-end"}>
            <h2 className={"text-grayscale-600 font-bold text-xl"}>8 800 533-78-67</h2>
            <p>Для звонков из-за рубежа: +7 499 285-97-67</p>
        </div>
    );
};