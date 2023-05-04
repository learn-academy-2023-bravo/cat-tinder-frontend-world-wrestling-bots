import { useParams } from 'react-router-dom'
import { Container } from 'reactstrap'

const BotShow = ({ bots }) => {
    const { id } = useParams()
    let currentBot = bots?.find((bot) => bot.id === +id)
    return (
        <main>
            <Container className='show-profile' fluid='sm'>
                <h1>Name: {currentBot.name}, Age: {currentBot.age}, Weight: {currentBot.weight}</h1>
                <div className='show-container'>
                <div
                    className='show-background'
                    style={{ backgroundImage: `url(${currentBot.image})` }}
                />
                <img
                    className='show-image'
                    src={currentBot.image}
                    alt={`${currentBot.name}'s profile`}
                />
                </div>
                <p>{currentBot.name} enjoys {currentBot.enjoys}</p>
            </Container>
        </main>
    )
}

export default BotShow