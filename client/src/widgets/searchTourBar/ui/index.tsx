import {FC} from "react";
import {useSearchTourContext} from "@/features/searchTour";
import {Input} from "@/shared/temp/Input.tsx";
import {Select} from "@/shared/temp/Select.tsx";
import {Checkbox} from "@/shared/temp/Checkbox.tsx";
import SearchButton from "@/shared/temp/SearchButton.tsx";

export const SearchTourBar: FC = () => {

    // контекст с данными для поиска
    const {searchParams, setSearchParams} = useSearchTourContext()

    // методы из сущности Filter

    // методы из сущности Location

    return (
        <div>
            <div>

                <Input
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />

                {/* Календарь */}

                <Select
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />

                <SearchButton path={"tours"} searchParams={searchParams}>
                    Искать
                </SearchButton>

            </div>
            <div>

                <Checkbox
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />

            </div>
        </div>
    );
};