import {FC} from "react";
import users from "@/shared/assets/icons/users.svg";
import back from "@/shared/assets/icons/back.svg";
import wallet from "@/shared/assets/icons/wallet.svg";

export const Details: FC = () => {
    return (
        <div className={"flex flex-col gap-2 w-full"}>
            <h2 className={"text-xl font-medium text-grayscale-500"}>
                Условия бронирования
            </h2>
            <div className={"flex flex-col md:flex-row gap-4 text-grayscale-500 text-[12px]"}>

                <div
                    className={"flex flex-row h-fit w-full md:basis-1/3 justify-between p-3 bg-grayscale-0 rounded-2xl"}>
                    <div className={"flex items-center justify-center w-8 h-8 rounded-xl bg-grayscale-300"}>
                        <img width={20} height={20} alt={"users"} src={users}/>
                    </div>
                    <div className={"flex flex-col w-2/3"}>
                            <span className={"text-sm"}>
                                Групповой формат
                            </span>
                        <p>
                            С вами будут другие участники, группа
                            до 10 человек
                        </p>
                    </div>
                </div>
                <div
                    className={"flex flex-row h-fit justify-between w-full md:basis-1/3 p-3 bg-grayscale-0 rounded-2xl gap-2"}>
                    <div className={"flex items-center justify-center w-8 h-8 rounded-xl bg-grayscale-300"}>
                        <img alt={"back"} src={back}/>
                    </div>
                    <div className={"flex flex-col"}>
                            <span className={"text-sm"}>
                                Бесплатная отмена
                            </span>
                        <p>
                            за 48 часов
                        </p>
                    </div>
                </div>
                <div
                    className={"flex flex-row h-fit w-full md:basis-1/3 justify-between p-3 bg-grayscale-0 rounded-2xl"}>
                    <div className={"flex items-center justify-center w-8 h-8 rounded-xl bg-grayscale-300"}>
                        <img alt={"wallet"} src={wallet}/>
                    </div>
                    <div className={"flex flex-col"}>
                            <span className={"text-sm"}>
                                Предоплата 25%,
                            </span>
                        <p>
                            остальное – на месте
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};