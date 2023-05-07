import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import BotShow from "../pages/BotShow"
import mockBots from "../mockBots"

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/botshow/1"]}>
            <Routes>
                <Route path="/botshow/:id" element={<BotShow bots={mockBots} />} />
            </Routes>
        </MemoryRouter>
    )
}
    
describe("<BotShow/>", () => {
    it("renders bot card with name", () => {
        renderShow()
        expect(screen.getByText(`${mockBots[0].name} enjoys ${mockBots[0].enjoys}`, {exact: false})).toBeInTheDocument()
    })
})