import { useState } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Card,
  CardBody,
} from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const BotEdit = ({ updateBot, deleteBot, bots }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  let currentBot = bots?.find((bot) => bot.id === +id)

  const [updatedBot, setUpdatedBot] = useState({
    id: currentBot.id,
    name: currentBot.name,
    age: currentBot.age,
    weight: currentBot.weight,
    enjoys: currentBot.enjoys,
    image: currentBot.image,
  })

  const handleChange = (e) => {
    setUpdatedBot({ ...updatedBot, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateBot(updatedBot)
    navigate(`/botshow/${id}`)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteBot(id)
    navigate('/botindex')
  }

  return (
    <>
      <Card style={{ margin: 'auto' }}>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='bot-name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='bot-name'
                onChange={handleChange}
                value={updatedBot.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for='bot-age'>Age</Label>
              <Input
                type='number'
                name='age'
                id='bot-age'
                onChange={handleChange}
                value={updatedBot.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for='bot-weight'>Weight</Label>
              <Input
                type='number'
                name='weight'
                id='bot-weight'
                onChange={handleChange}
                value={updatedBot.weight}
              />
            </FormGroup>
            <FormGroup>
              <Label for='bot-enjoys'>Enjoys</Label>
              <Input
                type='text'
                name='enjoys'
                id='bot-enjoys'
                onChange={handleChange}
                value={updatedBot.enjoys}
              />
            </FormGroup>
            <FormGroup>
              <Label for='bot-image'>Image URL</Label>
              <Input
                type='text'
                name='image'
                id='bot-image'
                onChange={handleChange}
                value={updatedBot.image}
              />
            </FormGroup>
            <Button type='submit' color='primary'>
              Submit
            </Button>
            <Button onClick={handleDelete} color='danger'>
              Delete
            </Button>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}


export default BotEdit