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
import {UserRole} from "@/shared/types";
import {RequireAuth} from "@/app/providers/routing";

function App() {
    return (
        <Routes>
            <Route
                path={"/onboarding"}
                element={
                    <RequireAuth role={UserRole.client}>
                        <OnBoardingPage/>
                    </RequireAuth>
                }
            />
            <Route path={"/"} element={<Layout/>}>
                <Route path={"main"} element={<HomePage/>}/>
                <Route path={"locations"} element={<LocationsPage/>}/>
                <Route path={"tours"} element={<ToursPage/>}/>
                <Route path={"tour/:id"} element={<TourPage/>}/>
                <Route path={"contributor/:id"} element={<ContributorInfoPage/>}/>
                <Route path={"profile"} element={<ProfilePage/>}/>
                <Route path={"favourites"} element={<FavouritesPage/>}/>
                <Route
                    path={"create"}
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