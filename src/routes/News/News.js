import React, {Fragment} from 'react';

import Card from './../../components/Card/Card';
import './News.scss';
import img from './img/news_image.jpeg';

const data = {
  tag: 'Chain Store Age',
  date: 'Feb 22, 2016',
  title: 'Billabong taps NetSuite to power omnichannel strategy',
  img: img,
  content: 'Marianne WilsonNetSuite Inc., a provider of cloud-based financials, ERP and and omnichannel software suites, said that boardsports retailer Billabong International Ltd. selected NetSuite...',
  likes: 132,
};

const News = () =>
  <Fragment>
    <Card {...data}/>
    <Card {...data}/>
    <Card {...data}/>
    <Card {...data}/>
    <Card {...data}/>
    <Card {...data}/>
  </Fragment>;

export default News;