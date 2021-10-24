import React, { useContext, useEffect, useRef, useState } from 'react'
import cardContext from "../context/flashcards/cardContext"
import Carditem from './Carditem';
import AddCard from './AddCard';
import { useHistory } from 'react-router-dom'


const Cards = (props) => {
    const context = useContext(cardContext);
    const { cards, getCards, editCard } = context;
    let history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getCards()
        }else{
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [card, setCard] = useState([])

    const updateCard = (currentCard) => {
        ref.current.click();
        setCard({id: currentCard._id, equestion: currentCard.question, eanswer: currentCard.answer, etag:currentCard.tag})
        
    }

    const handleClick = (e)=>{ 
        editCard(card.id, card.equestion, card.eanswer, card.etag)
        refClose.current.click();
        props.showAlert("Updated Successfully","success");
    }

    const onChange = (e)=>{
        setCard({...card, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddCard showAlert={props.showAlert}/>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Card</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="question" className="form-label">Question</label>
                                    <input type="text" className="form-control" id="equestion" name="equestion" value={card.equestion} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="answer" className="form-label">Answer</label>
                                    <input type="text" className="form-control" id="eanswer" name="eanswer" value={card.eanswer} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={card.etag} onChange={onChange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button disabled={card.equestion.length<5 || card.eanswer.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Card</button> */}
                            <button onClick={handleClick} type="button" className="btn btn-primary">Update Card</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <h2 className={`container ${props.mode==='light'?'':'text-light'}`}>Your Cards here</h2>
                <div className="container mx-2"> 
                {cards.length===0 && 'No cards to display'}
                </div>
                <div className="d-flex flex-wrap">
                {
                cards.map((card) => {
                    return <Carditem key={card._id} updateCard={updateCard} card={card} showAlert={props.showAlert} />
                })}
                </div>
            </div>
        </>
    )
}

export default Cards
