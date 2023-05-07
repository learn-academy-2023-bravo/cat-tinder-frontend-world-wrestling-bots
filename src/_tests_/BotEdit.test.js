import { render, screen } from '@testing-library/react'
import BotEdit from '../pages/BotEdit'
import mockBots from '../mockBots'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('<BotEdit />', () => {
  it('renders bot edit inputs', () => {
    render(
      <MemoryRouter initialEntries={['/botedit/1']}>
        <Routes>
          <Route
            path='/botedit/:id'
            element={<BotEdit bots={mockBots} />}
          />
        </Routes>
      </MemoryRouter>
    )

    const nameInput = screen.getByRole('textbox', {
      name: /name/i,
    })
    expect(nameInput).toBeInTheDocument()

    const ageInput = screen.getByRole('textbox', {
      name: /age/i,
    })
    expect(ageInput).toBeInTheDocument()

    const enjoysInput = screen.getByRole('textbox', {
      name: /enjoys/i,
    })
    expect(enjoysInput).toBeInTheDocument()

    const imageInput = screen.getByRole('textbox', {
      name: /image/i,
    })
    expect(imageInput).toBeInTheDocument()
  })
})