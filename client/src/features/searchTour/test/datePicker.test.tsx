import {TourAccessibility} from "@/shared/types";
import {describe} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {SearchContext} from "@/features/searchTour/model/context/context.ts";
import {DatePicker} from "@/features/searchTour/ui/form/datePicker"

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

describe("Form DatePicker", () => {

    it("Проверка рендеринга компонента", () => {

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <DatePicker />
                </SearchContext.Provider>
            </BrowserRouter>
        )

        expect(screen.getByRole("form-datePicker")).toBeInTheDocument()

    })

    it("Проверка открытия календаря", () => {

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <DatePicker/>
                </SearchContext.Provider>
            </BrowserRouter>
        )

        fireEvent.click(screen.getByRole("form-datePicker"))
        expect(screen.getByRole("dialog")).toBeInTheDocument()

    })

    it("Проверка выбора даты", () => {

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <DatePicker />
                </SearchContext.Provider>
            </BrowserRouter>
        )

        fireEvent.click(screen.getByRole("form-datePicker"))

        const date = screen.getByText("Когда")
        fireEvent.click(date)

        expect(mockSearchParams.setDate).toHaveBeenCalled()

    })

})