import {FC} from "react";
import { YandexMapCoordinates } from "@/shared/types";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {ApiKeys} from "@/app/config.ts";
import {cn} from "@/app/lib";

type MapProps = {
    value: YandexMapCoordinates
}

export const MapView: FC<MapProps> = ({value }) => {
    return (
        <YMaps query={{apikey: ApiKeys.YANDEX_MAP_API}}>
            <div className={cn("w-full wide:w-[420px] rounded-2xl overflow-hidden")}>
                <Map
                    width={"100%"}
                    state={{
                        center: [value.point.latitude, value.point.longitude],
                        zoom: value.zoom,
                    }}
                    options={{ suppressMapOpenBlock: true }}
                >
                    <Placemark geometry={[value.point.latitude, value.point.longitude]}/>
                </Map>
            </div>
        </YMaps>
    );
};