import { NavLink, useParams } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const BotShow = ({ bots }) => {
    const { id } = useParams()
    let currentBot = bots?.find((bot) => bot.id === +id)
    return (
        <main>
            <Container className='show-profile' fluid='sm'>
                <h1>Name: {currentBot.name}, Age: {currentBot.age}, Weight: {currentBot.weight}</h1>
                <div className='show-container'>
                <img
                    className='show-image'
                    src={currentBot.image}
                    alt={`${currentBot.name}'s profile`}
                />
                </div>
                <p>{currentBot.name} enjoys {currentBot.enjoys}</p>
            </Container>
            <Button to={`/botedit/${id}`} tag={NavLink} outline={true}>
                Edit
            </Button>
        </main>
    )
}

export default BotShow