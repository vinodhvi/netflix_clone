import React from "react";
import './Cards.css';
import cards_data from "./Cards_data";


const Cards = () => {
    return(
        <div className="title-cards">
            <div className="containers">
                <h2>Popular on Netflix</h2>
                <div className="card-list">
                    {
                        cards_data.map((cards, index) => {
                            return(
                                <div className="cards" key={index}>
                                    <img src={cards.image} alt={cards.alt}/>
                                    <p>{cards.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards;