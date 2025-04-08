import {FC} from "react";
import style from "./style.module.css"
import {IUser, ITour, IContacts} from "@/shared/types";
import {Header} from "./header";
import {Description} from "./description";
import {Tours} from "./tours";

type LayoutProps = {
    contributor: IUser
}

export const Index: FC<LayoutProps> = ({contributor}) => {
    return (
        <div className={style.container}>
            <Header
                name={contributor.name}
                surname={contributor.surname}
                avatar={contributor.avatar}
                contacts={contributor.contacts as IContacts}
                rating={contributor.rating as number}
                ratingCount={contributor.ratingCount as number}
            />
            <Description desc={contributor.description as string}/>
            <Tours tours={contributor.tours as ITour[]}/>
        </div>
    );
};