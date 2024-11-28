import {FC} from "react";

export const Annotation: FC = () => {
    return (
        <div className={"px-4 md:px-32 xl:px-56"}>
            <p className={"text-grayscale-500 text-xs"}>
                Сервис предоставляет ООО “Т-Путешествия”, ОГРН 1227700720158
                <br/>
                В рамках студенческой производственной практики ОмГУ Х Т-Банк
                <br/>
                @ 2024, АО “ТБанк”, неофициальный сайт
            </p>
        </div>
    );
};