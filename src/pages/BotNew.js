import { useState } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const BotNew = ({ createBot }) => {
  const navigate = useNavigate()

  const [newBot, setNewBot] = useState({
    name: "",
    age: "",
    weight: "",
    enjoys: "",
    image: "",
  })

  const handleChange = (e) => {
    setNewBot({ ...newBot, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createBot(newBot)
    navigate("/botindex")
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="bot-name">Name</Label>
          <Input
            type="text"
            name="name"
            id="bot-name"
            placeholder="The name of your Bot"
            onChange={handleChange}
            value={newBot.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bot-age">Age</Label>
          <Input
            type="number"
            name="age"
            id="bot-age"
            placeholder="How old is your bot?"
            onChange={handleChange}
            value={newBot.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bot-weight">Weight</Label>
          <Input
            type="number"
            name="weight"
            id="bot-weight"
            placeholder="Enter the bot's weight for placing into proper weight class"
            onChange={handleChange}
            value={newBot.weight}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bot-enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            id="bot-enjoys"
            placeholder="What does your bot enjoy?"
            onChange={handleChange}
            value={newBot.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bot-image">Image URL</Label>
          <Input
            type="text"
            name="image"
            id="bot-image"
            placeholder="Enter your Bot-Face!"
            onChange={handleChange}
            value={newBot.image}
          />
        </FormGroup>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </>
  )
}

export default BotNew
