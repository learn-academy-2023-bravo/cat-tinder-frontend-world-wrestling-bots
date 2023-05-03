// BotIndex page structure
// imports
import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

const BotIndex = ({ bots }) => {
    
    return (
        
        <main className='bots-index-cards'>
            {bots.map((bot, index) => {
                return (
                    <Card style={{ width: '18rem' }} key={index}>
                    <CardBody>
                        <CardTitle tag="h5">
                            {bot.name}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Age {bot.age}. Weight {bot.weight}
                        </CardSubtitle>
                    </CardBody>
                        <img alt={`profile of a bot named ${bot.name}`} src={bot.image} width="100%" />
                    <CardBody>
                        <CardText>
                            Enjoys: {bot.enjoys}
                        </CardText>
                        <Button>
                            Click Away IF YOU DARE!!
                         </Button>
                    </CardBody>
                </Card>
                )
            })}
        </main>
    )
}

export default BotIndex