import {FC} from "react";
import style from "./style.module.css"
import {Header} from "./header";
import {Description} from "./description";
import {Tours} from "./tours";
import {useUser} from "@/entities";

type LayoutProps = {
    contributorId: number
}

export const Index: FC<LayoutProps> = ({contributorId}) => {

    const {data: contributor} = useUser(contributorId)

    return (
        <div className={style.container}>
            <Header
                name={contributor.name}
                surname={contributor.surname}
                avatar={contributor.avatar}
                contacts={contributor.contacts}
                rating={contributor.rating}
                ratingCount={contributor.ratingCount}
            />
            <Description desc={contributor.info}/>
            <Tours tours={contributor.tours}/>
        </div>
    );
};