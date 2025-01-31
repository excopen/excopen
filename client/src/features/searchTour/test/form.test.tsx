import { render, screen } from "@testing-library/react";
import {describe, expect, it, vi} from "vitest";
import {Orientation, TourAccessibility} from "@/shared/types";
import { useWindowSize } from "usehooks-ts";
import { Form } from "@/features";
import { BrowserRouter } from "react-router-dom";
import { SearchContext } from "@/features/searchTour/model/context/context.ts";

vi.mock("usehooks-ts", () => ({
    useWindowSize: vi.fn(),
    useOnClickOutside: vi.fn()
}));

const mockSearchParams = {
    searchParams: {
        location: "Омск",
        date: { from: undefined, to: undefined },
        accessibility: TourAccessibility.WITHOUT_CHILDREN,
        byCity: false
    },
    isSearch: false,
    setLocation: vi.fn(),
    setAccessibility: vi.fn(),
    setByCity: vi.fn(),
    setDate: vi.fn(),
    setIsSearch: vi.fn()
}

describe("Form", () => {

    it("Проверка рендеринга компонента", () => {

        (useWindowSize as ReturnType<typeof vi.fn>).mockReturnValue({ width: 1024 });

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <Form orientation={Orientation.VERTICAL} />
                </SearchContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByRole("form")).toBeInTheDocument()
        expect(screen.getByText("Куда теперь?")).toBeInTheDocument()
        expect(screen.getByText("Искать")).toBeInTheDocument()

    })

    it("Проверка монтирования компонента с горизонтальной ориентацией", () => {

        (useWindowSize as ReturnType<typeof vi.fn>).mockReturnValue({ width: 1024 })

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <Form orientation={Orientation.HORIZONTAL} />
                </SearchContext.Provider>
            </BrowserRouter>
        );

        const formElement = screen.getByRole("form")

        expect(formElement).toBeInTheDocument()
        expect(formElement).toBeInTheDocument()
        expect(formElement.className).toMatch(/containerHorMode/)

    })

    it("Проверка монтирования компонента с вертикальной ориентацией", () => {

        (useWindowSize as ReturnType<typeof vi.fn>).mockReturnValue({width: 1024})

        render(
            <BrowserRouter>
                <SearchContext.Provider value={mockSearchParams}>
                    <Form orientation={Orientation.VERTICAL} />
                </SearchContext.Provider>
            </BrowserRouter>
        );

        const formElement = screen.getByRole("form")

        expect(formElement).toBeInTheDocument()
        expect(formElement).toBeInTheDocument()
        expect(formElement.className).toMatch(/containerVerMode/)
        expect(screen.getByText("Куда теперь?")).toBeInTheDocument()

    })

})