// BotNew page structure
// Imports
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap"

const BotNew = ({ createBot }) => {
  
  const navigate = useNavigate()

  const [newBot, setNewBot] = useState({
    name: "",
    age: "",
    weight: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
      // Spread operator makes copy of state object
      // e.target.name will give us the key we are updating based on input
      // e.target.value will be the new value in state
      setNewBot({ ...newBot, [e.target.name]: e.target.value})
    }

  const handleSubmit = ()=>{
  createBot(newBot)
  navigate("/botindex")
  }
  
  return (
    <>
      <Card>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="bot-name">Name</Label>
              <Input
                id="bot-name"
                name="name"
                placeholder="The name of your Bot"
                type="text"
                onChange={handleChange}
                value={newBot.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bot-age">Age</Label>
              <Input
                id="bot-age"
                name="age"
                placeholder="Enter the bot's from date of Manufactoring"
                type="text"
                onChange={handleChange}
                value={newBot.age}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bot-weight">Weight</Label>
              <Input
                id="bot-weight"
                name="weight"
                placeholder="Enter the bot's weight for placing into proper weight class"
                type="text"
                onChange={handleChange}
                value={newBot.weight}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cat-enjoys">Enjoys</Label>
              <Input
                id="bot-enjoys"
                name="enjoys"
                placeholder="What does your bot enjoy?"
                type="text"
                onChange={handleChange}
                value={newBot.enjoys}
              />
            </FormGroup>
            <FormGroup>
              <Label for="bot-image">Picture</Label>
              <Input
                id="bot-image"
                name="image"
                placeholder="Enter your Bot-Face!"
                type="text"
                onChange={handleChange}
                value={newBot.image}
              />
            </FormGroup>
            <Button onClick={handleSubmit}>Submit Bot</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}

export default BotNew
