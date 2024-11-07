import {Route, Routes} from "react-router-dom";
import {
    ContributorInfoPage, CreateTourPage,
    FavouritesPage,
    HomePage,
    Layout,
    LocationsPage,
    OnBoardingPage,
    ProfilePage, TourPage,
    ToursPage
} from "@/pages";
import {RouteNames, UserRole} from "@/shared/types";
import {RequireAuth} from "@/app/providers/routing";

function App() {
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
                <Route path={RouteNames.TOURS} element={<ToursPage/>}/>
                <Route path={`${RouteNames.TOUR}/:id`} element={<TourPage/>}/>
                <Route path={`${RouteNames.CONTRIBUTOR}/:id`} element={<ContributorInfoPage/>}/>
                <Route path={RouteNames.PROFILE} element={<ProfilePage/>}/>
                <Route path={RouteNames.FAVOURITES} element={<FavouritesPage/>}/>
                <Route
                    path={RouteNames.CREATE}
                    element={
                        <RequireAuth role={UserRole.contributor}>
                            <CreateTourPage/>
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;