import {FC} from "react";
import style from "./style.module.css"
import {Form, Orientation} from "@/features";
import {Locations} from "@/entities";
import {Title} from "./title";

export const Index: FC = () => {
    return (
        <section className={style.container}>
            <Title/>
            <Form orientation={Orientation.HORIZONTAL}/>
            <Locations/>
        </section>
    );
};