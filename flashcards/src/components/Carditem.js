import React, {useContext} from 'react'
import cardContext from "../context/flashcards/cardContext"


const Carditem = (props) => {
    const context = useContext(cardContext);
    const { deleteCard } = context;
    const { card, updateCard } = props;
    return (
        <>
        <div className="container col-md-3 shadow-lg p-3 mb-5 bg-body rounded mx-5">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h4 className="card-title"><i className="fas fa-tags"></i> {card.question}?</h4>
                    </div>
                    <b className="card-text">{card.answer}</b>
                    <p className="card-text text-uppercase">{card.tag}</p>
                    <i className="far fa-trash-alt mx-2 fs-3" onClick={()=>{deleteCard(card._id);props.showAlert("Deleted Successfully!!","success")}}></i>
                    <i className="far fa-edit mx-2 fs-3" onClick={()=>{updateCard(card)}}></i>
                </div>
            </div>
        </div>
        </>
    )
}

export default Carditem

