export type ToFavContextType = {
    favourites: number[],
    addToFavourite: (favourite: number) => void,
    removeFromFavourite: (favourite: number) => void
}