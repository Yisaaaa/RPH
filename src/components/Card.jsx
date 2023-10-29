import React from "react";
import CardCss from "../css/Card.css";

// src="/src/img/card-img/Manila.png"
export default function Card(prop) {
    return (
        <figure className="card">
            <img className="card-img" src={`/card-img/${prop.cardImg}`} />
            <div className="card-text">
                <div className="info">
                    <p className="sub-text">{prop.subHeading}</p>
                    <p className="date">{prop.date}</p>
                </div>
                <p className="title">{prop.title}</p>
                <p className="description">{prop.content[0].text}</p>
            </div>
            <a className="btn--card" href={`/article/${prop.id}`}>
                Go to article
            </a>
        </figure>
    );
}
