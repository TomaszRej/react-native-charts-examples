import React from 'react';
import {defaultData} from '../../constants/data';
import {VictoryChart, VictoryScatter, VictoryTheme} from 'victory-native';

const ScatterChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material} domain={{x: [0, 5], y: [0, 7]}}>
      <VictoryScatter
        style={{data: {fill: '#c43a31'}}}
        size={7}
        data={defaultData}
        labels={({datum}) => datum.y}
      />
    </VictoryChart>
  );
};

export default ScatterChart;
