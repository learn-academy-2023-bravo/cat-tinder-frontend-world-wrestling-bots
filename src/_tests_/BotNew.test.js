import { render, screen } from "@testing-library/react"
import BotNew from "../pages/BotNew"
import { BrowserRouter } from "react-router-dom"

describe('<BotNew />', () => {
    it("renders new bot inputs", () => {
        render(
            <BrowserRouter>
                <BotNew />
            </BrowserRouter>
        )

        const nameInput = screen.getByRole('textbox', {
            name: /name/i
        })
        expect(nameInput).toBeInTheDocument()

        const ageInput = screen.getByLabelText('Age')
        expect(ageInput).toBeInTheDocument()

        const enjoysInput = screen.getByRole('textbox', {
            name: /enjoys/i
        })
        expect(enjoysInput).toBeInTheDocument()

        const imageInput = screen.getByRole('textbox', {
            name: /image/i
        })
        expect(imageInput).toBeInTheDocument()
    })
})