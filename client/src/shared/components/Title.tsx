import {FC} from "react";

export const Title: FC = () => {
    return (
        <section className={"flex flex-col w-full py-24 items-center text-center gap-4"}>
            <h1 className={"text-grayscale-500 font-bold text-4xl"}>
                Найдем Вашу идеальную экскурсию
            </h1>
            <p className={"text-grayscale-500 font-medium text-sm"}>
                Интересное со всего мира с Т-Банком
            </p>
        </section>
    );
};