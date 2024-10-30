import {IRoute} from "./types.ts";
import Layer from "../../../pages/Layer.tsx";
import HomePage from "../../../pages/HomePage.tsx";
import LocationsPage from "../../../pages/LocationsPage.tsx";
import ToursPage from "../../../pages/ToursPage.tsx";
import TourPage from "../../../pages/TourPage.tsx";
import ContributorInfoPage from "../../../pages/ContributorInfoPage.tsx";
import CreateTourPage from "../../../pages/CreateTourPage.tsx";
import ProfilePage from "../../../pages/ProfilePage.tsx";
import FavouritesPage from "../../../pages/FavouritesPage.tsx";
import OnBoardingPage from "../../../pages/OnBoardingPage.tsx";
import {UserRole} from "@/shared/types";

export const routes: IRoute[] = [
    {
        path: '/onboarding',
        element: <OnBoardingPage />,
        userRole: [UserRole.client],
        isPrivate: false
    },
    {
        path: '/',
        element: <Layer/>,
        userRole: [UserRole.client, UserRole.contributor],
        isPrivate: false,
        children: [
            {
                path: 'main',
                element: <HomePage/>,
                userRole: [UserRole.client, UserRole.contributor],
                isPrivate: false
            },
            {
                path: 'location',
                element: <LocationsPage/>,
                userRole: [UserRole.client, UserRole.contributor],
                isPrivate: false
            },
            {
                path: 'tours',
                element: <ToursPage/>,
                userRole: [UserRole.client, UserRole.contributor],
                isPrivate: false
            },
            {
                path: 'tour/:id',
                element: <TourPage/>,
                userRole: [UserRole.client, UserRole.contributor],
                isPrivate: false
            },
            {
                path: 'contributor/:id',
                element: <ContributorInfoPage/>,
                userRole: [UserRole.client, UserRole.contributor],
                isPrivate: false
            },
            {
                path: 'create',
                element: <CreateTourPage/>,
                userRole: [UserRole.contributor],
                isPrivate: true
            },
            {
                path: 'profile',
                element: <ProfilePage/>,
                userRole: [UserRole.client, UserRole.contributor],
                isPrivate: true
            },
            {
                path: 'favourites',
                element: <FavouritesPage/>,
                userRole: [UserRole.client, UserRole.contributor],
                isPrivate: false
            }
        ]
    }
]