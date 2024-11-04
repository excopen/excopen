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
import {useUserContext} from "@/app/providers/context";
import {UserRole} from "@/shared/types";

function App() {

    const {role} = useUserContext()

    return (
        <Routes>

            {/* Маршруты достпные только для клитента */}

            {
                role === UserRole.client ?
                    <Route path={"/onboarding"} element={<OnBoardingPage/>}/> :
                    null
            }

            {/* Общие маршруты */}

            <Route path={"/"} element={<Layout/>}>
                <Route path={"main"} element={<HomePage/>}/>
                <Route path={"locations"} element={<LocationsPage/>}/>
                <Route path={"tours"} element={<ToursPage/>}/>
                <Route path={"tour/:id"} element={<TourPage/>}/>
                <Route path={"contributor/:id"} element={<ContributorInfoPage/>}/>
                <Route path={"profile"} element={<ProfilePage/>}/>
                <Route path={"favourites"} element={<FavouritesPage/>}/>

                {/* Маршруты достпные только для контрибьютера */}

                {
                    role === UserRole.contributor ?
                        <Route path={"create"} element={<CreateTourPage/>}/> :
                        null
                }

            </Route>
        </Routes>
    );
}

export default App;