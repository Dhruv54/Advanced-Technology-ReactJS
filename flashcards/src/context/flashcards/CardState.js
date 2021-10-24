import CardContext from "./cardContext";
import { useState } from "react";

const CardState = (props) => {
  const host = "http://localhost:5000"
  const cardsInitial = [];
  const [cards, setCards] = useState(cardsInitial)

  // Get all Cards
  const getCards = async () => {
    // API Call 
    const response = await fetch(`${host}/api/flashcards/getcards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setCards(json)
  }

  // Add a Card
  const addCard = async (question, answer, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/flashcards/addcard`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({question, answer, tag})
    });

    const card = await response.json();
    setCards(cards.concat(card))
  }

  // Delete a Card
  const deleteCard = async (id) => {
    alert("Are you sure to Delete item?");
    // API Call
    const response = await fetch(`${host}/api/flashcards/deletecard/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json(); 
    const newCards = cards.filter((card) => { return card._id !== id })
    setCards(newCards)
  }

  // Edit a Card
  const editCard = async (id, question, answer, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/flashcards/updatecard/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({question, answer, tag})
    });
    const json = await response.json(); 

    let newCards = JSON.parse(JSON.stringify(cards))
    // Logic to edit in client
    for (let index = 0; index < newCards.length; index++) {
      const element = newCards[index];
      if (element._id === id) {
        newCards[index].question = question;
        newCards[index].answer = answer;
        newCards[index].tag = tag; 
        break; 
      }
    }  
    setCards(newCards);
  }

  return (
    <CardContext.Provider value={{ cards, addCard, deleteCard, editCard, getCards }}>
      {props.children}
    </CardContext.Provider>
  )

}
export default CardState;