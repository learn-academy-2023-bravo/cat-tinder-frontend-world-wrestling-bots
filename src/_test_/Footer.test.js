import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer.js"

describe("<Footer />", () => {
  it("renders without crashing", () => {
   
    render(<BrowserRouter>
          <Footer />
        </BrowserRouter>,
        )
    const element = screen.getByText("Herein lies the footer")
    expect(element).toBeInTheDocument()
    })
    
})
