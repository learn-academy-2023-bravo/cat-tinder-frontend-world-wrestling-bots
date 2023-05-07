import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
  } from 'reactstrap'
  import { NavLink } from 'react-router-dom'
  
  const BotIndex = ({ bots }) => {
    return (
      <Row>
        {bots.map((bot, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={bot.id}>
              <NavLink
                to={`/botshow/${bot.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Card key={index} className='bott-card'>
                  <img
                    alt={`profile of a bot named ${bot.name}`}
                    src={bot.image}
                  />
                  <CardBody>
                    <CardTitle tag='h5'>{bot.name}</CardTitle>
                    <CardSubtitle className='mb-2 text-muted' tag='h6'>
                      Age: {bot.age}
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </NavLink>
            </Col>
          )
        })}
      </Row>
    )
  }
  
  export default BotIndex