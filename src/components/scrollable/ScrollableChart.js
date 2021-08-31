import React from 'react';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from 'react-native-responsive-linechart';

const ScrollableChart = () => {
  return (
    <Chart
      style={{height: 200, width: '100%'}}
      data={[
        {x: 0, y: 20},
        {x: 1, y: 6},
        {x: 2, y: 8},
        {x: 3, y: 10},
        {x: 4, y: 13},

        {x: 5, y: 15},
        {x: 6, y: 6},
        {x: 7, y: 15},
        {x: 8, y: 3},
        {x: 9, y: 15},
        {x: 10, y: 6},
        {x: 11, y: 15},
        {x: 12, y: 3},
      ]}
      padding={{left: 40, bottom: 20, right: 20, top: 20}}
      xDomain={{min: 0, max: 10}}
      yDomain={{min: 0, max: 20}}
      viewport={{size: {width: 2}}}>
      <VerticalAxis
        tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
        theme={{
          axis: {stroke: {color: '#aaa', width: 2}},
          ticks: {stroke: {color: '#aaa', width: 2}},
          labels: {formatter: (v: number) => v.toFixed(2)},
        }}
      />
      <HorizontalAxis
        tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
        theme={{
          axis: {stroke: {color: '#aaa', width: 2}},
          ticks: {stroke: {color: '#aaa', width: 2}},
          labels: {label: {rotation: 50}, formatter: v => v.toFixed(1)},
        }}
      />
      <Line
        theme={{
          stroke: {color: 'red', width: 2},
        }}
        smoothing="cubic-spline"
      />
      <Area
        theme={{
          gradient: {
            from: {color: '#f39c12', opacity: 0.4},
            to: {color: '#f39c12', opacity: 0.4},
          },
        }}
        smoothing="cubic-spline"
      />
    </Chart>
  );
};

export default ScrollableChart;
