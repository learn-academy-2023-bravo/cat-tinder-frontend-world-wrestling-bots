import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('<Footer />', () => {
  it('should display creators names', () => {
    render(<Footer />)
    const footer = screen.getByText(/Created by Borja Xaire & Elmer Figueroa/i)
    expect(footer).toBeInTheDocument()
  })
})