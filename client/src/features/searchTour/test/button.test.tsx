import {Orientation, TourAccessibility} from "@/shared/types";
import {describe} from "vitest";
import {BrowserRouter} from "react-router-dom";
import {fireEvent, render, screen} from "@testing-library/react";
import {SearchContext} from "@/features/searchTour/model/context/context.ts";
import {SearchButton} from "@/features/searchTour/ui/form/button"

vi.mock("usehooks-ts", () => ({
    useOnClickOutside: vi.fn(),
}))

const mockSearchParams = {
    searchParams: {
        location: "",
        date: { from: undefined, to: undefined },
        accessibility: TourAccessibility.WITHOUT_CHILDREN,
        byCity: false,
    },
    isSearch: false,
    setLocation: vi.fn(),
    setAccessibility: vi.fn(),
    setByCity: vi.fn(),
    setDate: vi.fn(),
    setIsSearch: vi.fn(),
}

const mockNavigate = vi.fn()

describe("Form button", () => {

    it("Проверка рендеринга кнопки", () => {

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <SearchButton location={"Москва"} disabled={false} orientation={Orientation.HORIZONTAL}/>
                </SearchContext.Provider>
            </BrowserRouter>
        )

        expect(screen.getByRole("searchButton")).toBeInTheDocument()

    })

    it("Проверка клика по кнопке, если форма не заполнена", () => {

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <SearchButton location={"Москва"} disabled={false} orientation={Orientation.HORIZONTAL} />
                </SearchContext.Provider>
            </BrowserRouter>
        )

        fireEvent.click(screen.getByRole("searchButton"))

        expect(mockSearchParams.setIsSearch).toHaveBeenCalled()
        expect(mockNavigate).not.toHaveBeenCalled()

    })

    it("Проверка клика по кнопке, если форма заполнена", () => {

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <SearchButton location={"Москва"} disabled={true} orientation={Orientation.HORIZONTAL} />
                </SearchContext.Provider>
            </BrowserRouter>
        )

        fireEvent.click(screen.getByRole("searchButton"))
        expect(mockSearchParams.setIsSearch).toHaveBeenCalledWith(true)

    })

})