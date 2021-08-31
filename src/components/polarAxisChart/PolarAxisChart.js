import React from 'react';
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
  VictoryBar,
} from 'victory-native';

const PolarAxisChart = () => {
  return (
    <VictoryChart polar theme={VictoryTheme.material}>
      {['cat', 'dog', 'bird', 'dog', 'frog', 'fish'].map((d, i) => {
        return (
          <VictoryPolarAxis
            dependentAxis
            key={i}
            label={d}
            labelPlacement="perpendicular"
            style={{tickLabels: {fill: 'none'}}}
            axisValue={d}
          />
        );
      })}
      <VictoryBar
        style={{data: {fill: 'blue', width: 25}}}
        data={[
          {x: 'cat', y: 10},
          {x: 'dog', y: 25},
          {x: 'bird', y: 40},
          {x: 'frog', y: 50},
          {x: 'fish', y: 50},
        ]}
      />
    </VictoryChart>
  );
};

export default PolarAxisChart;
