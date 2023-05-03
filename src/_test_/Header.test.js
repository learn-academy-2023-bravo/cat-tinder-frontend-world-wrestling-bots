import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header.js"

describe("<Header />", () => {
  it("renders without crashing", () => {
   
    render(<BrowserRouter>
          <Header />
        </BrowserRouter>,
        )
    const element = screen.getByText("Above it all, the header")
    expect(element).toBeInTheDocument()
    })
    
})