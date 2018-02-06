import React from 'react';

import './Card.scss';
import CardFooter from "./CardFooter/CardFooter";

const Card = ({tag, date, title, img, content, likes}) =>
  <div className="card">
    <div className="card__container">
      <div className="card__container__header">
        <h2 className="card__container__header__tag">{tag}</h2>
        <h2 className="card__container__header__date">{date}</h2>
      </div>
      <h2 className="card__container__title">{title}</h2>
      <img className="card__container__image" src={img} alt="news"/>
      <p className="card__container__content">{content}</p>
    </div>
    <CardFooter likes={likes}/>
  </div>;

export default Card;