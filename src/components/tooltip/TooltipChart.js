import React from 'react';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Area,
  Line,
  Tooltip,
} from 'react-native-responsive-linechart';

const TooltipChart = () => {
  return (
    <Chart
      style={{height: 200, width: '100%', marginTop: 10}}
      data={[
        {x: 5, y: 15},
        {x: 6, y: 6},
        {x: 7, y: 15},
        {x: 8, y: 3},
      ]}
      padding={{left: 40, bottom: 20, right: 20, top: 20}}
      xDomain={{min: 0, max: 30}}
      yDomain={{min: -4, max: 20}}>
      <VerticalAxis
        tickCount={10}
        theme={{
          axis: {stroke: {color: '#aaa', width: 2}},
          ticks: {stroke: {color: '#aaa', width: 2}},
          labels: {formatter: (v: number) => v.toFixed(2)},
        }}
      />
      <HorizontalAxis
        tickCount={9}
        theme={{
          axis: {stroke: {color: '#aaa', width: 2}},
          ticks: {stroke: {color: '#aaa', width: 2}},
          labels: {label: {rotation: 50}, formatter: Math.round},
        }}
      />
      <Area />
      <Line
        theme={{stroke: {color: 'red', width: 1}}}
        tooltipComponent={
          <Tooltip theme={{formatter: ({y}) => y.toFixed(2)}} />
        }
      />
    </Chart>
  );
};

export default TooltipChart;
