import React from 'react';
import {
  VictoryStack,
  VictoryArea,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';

const StackChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryStack>
        <VictoryArea
          data={[
            {x: 'a', y: 2},
            {x: 'b', y: 3},
            {x: 'c', y: 5},
          ]}
        />
        <VictoryArea
          data={[
            {x: 'a', y: 1},
            {x: 'b', y: 4},
            {x: 'c', y: 5},
          ]}
        />
        <VictoryArea
          data={[
            {x: 'a', y: 3},
            {x: 'b', y: 2},
            {x: 'c', y: 6},
          ]}
        />
      </VictoryStack>
    </VictoryChart>
  );
};

export default StackChart;
