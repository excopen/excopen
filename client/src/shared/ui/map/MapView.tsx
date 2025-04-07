import {FC} from "react";
import { YandexMapCoordinates } from "@/shared/types";
import {Placemark, YMaps, Map} from "@pbe/react-yandex-maps";
import {ApiKeys} from "@/app/config.ts";
import {CardMap} from "@/shared/ui";

type MapProps = {
    value: YandexMapCoordinates
}

export const MapView: FC<MapProps> = ({ value }) => {
    return (
        <YMaps query={{apikey: ApiKeys.YANDEX_MAP_API}}>
            <CardMap>
                <Map
                    state={{
                        center: [value.point.latitude, value.point.longitude],
                        zoom: value.zoom,
                    }}
                    options={{ suppressMapOpenBlock: true }}
                >
                    <Placemark geometry={[value.point.latitude, value.point.longitude]}/>
                </Map>
            </CardMap>
        </YMaps>
    );
};