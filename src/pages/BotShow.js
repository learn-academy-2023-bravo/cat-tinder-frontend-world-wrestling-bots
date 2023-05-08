import { NavLink, useParams } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const BotShow = ({ bots }) => {
    const { id } = useParams()
    let currentBot = bots?.find((bot) => bot.id === +id)
    return (
        <main>
            <Container className='show-profile' fluid='sm'>
                <h2>Name: {currentBot.name}</h2> 
                <h4>Age: {currentBot.age} <br></br> Weight: {currentBot.weight}</h4>
                <div className='show-container'>
                <img
                    className='show-image'
                    src={currentBot.image}
                    alt={`${currentBot.name}'s profile`}
                />
                </div>
                <h4>{currentBot.name} enjoys {currentBot.enjoys}</h4>
            </Container>
            <Button to={`/botedit/${id}`} tag={NavLink} outline={false}>
                Edit {currentBot.name}
            </Button>
        </main>
    )
}

export default BotShow