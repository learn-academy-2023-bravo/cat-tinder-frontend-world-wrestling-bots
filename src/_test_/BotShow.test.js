import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import BotShow from "../pages/BotShow"
import mockBots from "../mockBots"

describe("<BotShow />", () => {
    it("renders without crashing", () => {
        render(
            <MemoryRouter initialEntries={['/botshow/1']}>
                <Routes>
                    <Route path="/botshow/:id" element={<BotShow bots={mockBots}/>} />  
                </Routes>
            </MemoryRouter>
        )
        const botName = screen.getByText(mockBots[0].name, {exact: false})
        expect(botName).toBeInTheDocument()
    })
})