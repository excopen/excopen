import { FC } from "react";

type LocationCardProps = {
    country: string;
    city: string;
    tourCount: number;
    image: string;
};

export const LocationCard: FC<LocationCardProps> = ({ country, city, tourCount, image }) => {
    return (
        <div
            className="relative flex flex-col justify-end px-4 py-6 w-56 h-80 rounded-xl bg-cover overflow-hidden
            transition-transform duration-500 ease-out hover:scale-105 group"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent
                opacity-70 pointer-events-none transition-opacity duration-300 group-hover:opacity-80"
            />

            <div className="flex flex-col gap-1 text-grayscale-0 items-start relative z-10">
                <span className="text-sm">{country}</span>
                <span className="text-xl font-medium">{city}</span>
                <span className="text-sm font-medium">{tourCount}+ экскурсий</span>
            </div>
        </div>
    );
};