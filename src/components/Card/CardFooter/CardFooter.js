import React from 'react';

const CardFooter = ({likes}) =>
    <div className="card__container__footer">
      <i className="fa fa-suitcase icons m-r-sm card__container__footer__icon" aria-hidden="true"></i>
      <div>
        <i className="fa fa-thumbs-up icons m-r-sm card__container__footer__icon" aria-hidden="true"></i>
        <span className="card__container__footer__icon__text">{likes}</span>
      </div>
      <i className="fa fa-external-link icons m-r-sm card__container__footer__icon" aria-hidden="true"></i>
    </div>;

export default CardFooter;