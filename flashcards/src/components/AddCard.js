import React, {useContext, useState} from 'react'
import cardContext from "../context/flashcards/cardContext"

const AddCard = (props) => {
    const context = useContext(cardContext);
    const {addCard} = context;

    const [card, setCard] = useState({question: "", answer: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addCard(card.question, card.answer, card.tag);
        setCard({question: "", answer: "", tag: ""})
        props.showAlert("Added Successfully!!","success");
    }

    const onChange = (e)=>{
        setCard({...card, [e.target.name]: e.target.value})
    }
    const style={
        "width":"53rem",
        "height":"25rem"
    }
    return (
        <>
        <div className="container card shadow-lg p-3 mb-5 bg-body rounded" style={style}>
        <h2>Add a Card</h2>
            <form className="my-3">
                <div className="container">
                <div className="mb-3 my-2 mx-2">
                    <label htmlFor="question" className="form-label"><b>Question</b></label>
                    <input type="text" className="form-control" id="question" name="question" aria-describedby="emailHelp" value={card.question} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3 my-2 mx-2">
                    <label htmlFor="answer" className="form-label"><b>Answer</b></label>
                    <input type="text" className="form-control" id="answer" name="answer" value={card.answer} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3 my-2 mx-2">
                    <label htmlFor="tag" className="form-label"><b>Tag</b></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={card.tag} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={card.question.length<5 || card.answer.length<5} type="submit" className="btn btn-primary mx-2" onClick={handleClick}>Add Card</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddCard

