import { render, screen } from '@testing-library/react'
import BotIndex from '../pages/BotIndex'
import mockBots from '../mockBots'
import { BrowserRouter } from 'react-router-dom'

describe ('<BotIndex />', () => {
    it("renders bot cards", () => {
        render(<BrowserRouter><BotIndex bots={mockBots} /></BrowserRouter>)
        mockBots.forEach((bot) => {
            const botName = screen.getByText(bot.name)
            expect(botName).toBeInTheDocument()
        })
    })
})