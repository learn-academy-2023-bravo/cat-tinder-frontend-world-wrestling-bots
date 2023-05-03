import { render, screen } from "@testing-library/react"
import BotNotFound from "../pages/BotNotFound.js"

describe("<BotNotFound />", () => {
  it("renders without crashing", () => {
   
    render(<BotNotFound />)
    const element = screen.getByText("These are not the bots you are looking for...")
    expect(element).toBeInTheDocument()
  })
})