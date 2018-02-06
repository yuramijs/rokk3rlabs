import React from 'react';

import './Sidebar.scss';

import analytics from './icons/analytics.svg';
import news from './icons/news.svg';
import boardBrief from './icons/board-brief.svg';
import briefcase from './icons/briefcase.svg';
import angleDoubleLeft from './icons/angle-double-left.svg';
import {Link} from "react-router-dom";

const Sidebar = () =>
  <div className="sidebar">
    <div className="sidebar__content">
      <h3 className="sidebar__content__header">
        Navigate
      </h3>
      <div className="sidebar__content__navigation">
        <ul className="sidebar__content__navigation__list">
          <li className="sidebar__content__navigation__list__item">
            <Link className="sidebar__content__navigation__list__item__link" to='/analytics'>
              <img className="sidebar__content__navigation__list__item__link__icon" src={analytics} alt="Analytics"/>
              <span className="sidebar__content__navigation__list__item__link__title">Analytics</span>
            </Link>
          </li>
          <li className="sidebar__content__navigation__list__item">
            <Link className="sidebar__content__navigation__list__item__link" to='/news'>
              <img className="sidebar__content__navigation__list__item__link__icon" src={news} alt="News"/>
              <span className="sidebar__content__navigation__list__item__link__title">News</span>
            </Link>
          </li>
          <li className="sidebar__content__navigation__list__item">
            <a className="sidebar__content__navigation__list__item__link">
              <img className="sidebar__content__navigation__list__item__link__icon" src={boardBrief} alt="Board Brief"/>
              <span className="sidebar__content__navigation__list__item__link__title">Board Brief</span>
            </a>
          </li>
          <a className="sidebar__content__navigation__list__item__link">
            <li className="sidebar__content__navigation__list__item">
              <img className="sidebar__content__navigation__list__item__link__icon" src={briefcase} alt="Briefcase"/>
              <span className="sidebar__content__navigation__list__item__link__title">Briefcase</span>
            </li>
          </a>
          <a className="sidebar__content__navigation__list__item__link sidebar__content__navigation__list__item__link_close">
            <li className="sidebar__content__navigation__list__item">
              <img className="sidebar__content__navigation__list__item__link__icon" src={angleDoubleLeft} alt="Close menu"/>
              <span className="sidebar__content__navigation__list__item__link__title">Close menu</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>;

export default Sidebar;