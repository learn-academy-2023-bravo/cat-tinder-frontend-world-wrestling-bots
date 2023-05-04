import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header.js"
import userEvent from "@testing-library/user-event"

describe("<Header />", () => {
  it("should render our cat-tinder name", () => {
    render(<Header />)
    const brand = screen.getByText(/World Wrestling Bots/i)
    expect(brand).toBeInTheDocument()
  })
    
  it("should contain active links")
    render(
      <BrowserRouter>
      <Header />
      </BrowserRouter>
    )

    userEvent.click(screen.getByText("Browse our Bots"))
    expect(screen.getByText("Browse our Bots")).toBeInTheDocument()
})