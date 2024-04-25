import React, { useEffect, useRef } from "react";
import './Cards.css';
import cards_data from "./Cards_data";


const Cards = () => {
const cardsRef = useRef();

const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
}

useEffect(()=> {
    cardsRef.current.addEventListener('wheel', handleWheel);
},[])

    return(
        <div className="title-cards">
            <div className="containers">
                <h2>Popular on Netflix</h2>
                <div className="card-list" ref={cardsRef}>
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