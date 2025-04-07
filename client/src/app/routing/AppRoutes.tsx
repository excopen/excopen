import {Navigate, Route, Routes} from "react-router-dom";
import {RouteNames, UserRole} from "@/shared/types";
import {RequireAuth} from "./RequireAuth.tsx";
import {
    BookingPage,
    ContributorPage, CreatePage, FavouritesPage,
    HomePage,
    Layout,
    LocationsPage,
    OnBoardingPage,
    ProfilePage, SettingsPage, SuccessPage,
    TourPage,
    ToursPage, WipPage
} from "@/pages";
import {FC} from "react";

export const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route
                path={`/${RouteNames.ON_BOARDING}`}
                element={
                    <RequireAuth role={UserRole.client}>
                        <OnBoardingPage/>
                    </RequireAuth>
                }
            />
            <Route path={"/"} element={<Layout/>}>
                <Route path={RouteNames.MAIN} element={<HomePage/>}/>
                <Route path={RouteNames.LOCATIONS} element={<LocationsPage/>}/>
                <Route path={`${RouteNames.TOURS}/:location`} element={<ToursPage/>}/>
                <Route path={`${RouteNames.TOUR}/:id/:title`} element={<TourPage/>}/>
                <Route path={`${RouteNames.CONTRIBUTOR}/:id/:name`} element={<ContributorPage/>}/>
                <Route path={RouteNames.PROFILE} element={<ProfilePage/>}/>
                <Route path={RouteNames.WIP} element={<WipPage/>}/>
                <Route path={RouteNames.FAVOURITES} element={<FavouritesPage/>}/>
                <Route
                    path={`${RouteNames.BOOKING}/:id`}
                    element={
                        <RequireAuth>
                            <BookingPage/>
                        </RequireAuth>
                    }
                />
                <Route
                    path={RouteNames.SUCCESS}
                    element={
                        <RequireAuth>
                            <SuccessPage/>
                        </RequireAuth>
                    }
                />
                <Route
                    path={RouteNames.SETTINGS}
                    element={
                        <RequireAuth>
                            <SettingsPage/>
                        </RequireAuth>
                    }
                />
                <Route
                    path={RouteNames.CREATE}
                    element={
                        <RequireAuth>
                            <CreatePage/>
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<Navigate to={RouteNames.MAIN} replace />} />
            </Route>
        </Routes>
    );
};