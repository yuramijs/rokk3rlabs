import React, {Component} from 'react';
import {Bar, Line, Doughnut} from 'react-chartjs-2';
import _ from 'lodash';
import moment from 'moment';
import activityData from './activity-data';

import './Analytics.scss';


export default class Chart extends Component {
  constructor() {
    super();

    this.time = activityData.map(({data}) => this.getHours(data.time));
    this.count = activityData.map(({data}) => data.count);
    this.speed = activityData.map(({data}) => data.speed);

    this.state = {
      chart: {
        datasets: [{
          label: 'Count',
          data: this.count,
          backgroundColor: 'rgba(100, 99, 132, 0.6)'
        },
          {
            label: 'Speed',
            data: this.speed,
            backgroundColor: 'rgba(0, 0, 132, 0.6)',
          },
          {
            label: 'time',
            data: this.time,
            backgroundColor: 'rgba(100, 0, 132, 0.6)',
          }
        ],
        labels: _.flatMap(activityData, item => item.zoneId)
      }
    };

    this.data = {
      datasets: [
        {
          label: 'Count',
          data: this.count,
          backgroundColor: 'rgba(100, 99, 132, 0.6)'
        },
        {
          label: 'Speed',
          data: this.speed,
          backgroundColor: 'rgba(0, 0, 132, 0.6)',
        },
        {
          label: 'time',
          data: this.time,
          backgroundColor: 'rgba(100, 0, 132, 0.6)',
        }
      ],
      labels: _.flatMap(activityData, item => item.zoneId)
    };

    this.setChartsUpdateInterval();
  }

  getHours(time) {
    return moment(time).format('h')
  }

  setChartsUpdateInterval() {
    setInterval(() => {
      const count = [];
      const speed = [];
      const time = [];
      const randomNumber = () => Math.floor(Math.random() * 10);

      _.map(activityData, item => {
        count.push(randomNumber());
        speed.push(randomNumber());
        time.push(item.data.time - 1466781876670 + randomNumber());
      });

      this.data = {
        datasets: [{
          label: 'Count',
          data: count,
          backgroundColor: 'rgba(100, 99, 132, 0.6)'
        },
          {
            label: 'Speed',
            data: speed,
            backgroundColor: 'rgba(0, 0, 132, 0.6)',
          },
          {
            label: 'time',
            data: time,
            backgroundColor: 'rgba(100, 0, 132, 0.6)',
          }
        ],
        labels: _.flatMap(activityData, item => item.zoneId)
      };

      this.forceUpdate()
    }, 60000);
  }

  render() {
    this.setChartsUpdateInterval();

    return (
      <div>
        <div className="chart__container">
          <Bar data={this.state.chart}/>
        </div>
        <div className="chart__container">
          <Line data={this.data}/>
        </div>
        <div className="chart__container">
          <Doughnut data={this.data}/>
        </div>
      </div>
    );
  }
}