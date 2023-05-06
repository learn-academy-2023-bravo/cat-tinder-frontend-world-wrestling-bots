import { render, screen } from '@testing-library/react'
import BotNotFound from '../pages/BotNotFound'

describe('<NotFound />', () => {
  it('should render error message', () => {
    render(<BotNotFound />)
    const botNotFound = screen.getByText(/Go back! It's a trap!/i)
    expect(botNotFound).toBeInTheDocument()
  })

  it('should contain image', () => {
    render(<BotNotFound />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('alt', 'Jetby mind tricks')
  })
})