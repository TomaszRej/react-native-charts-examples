import React from 'react';
import {VictoryChart, VictoryTheme, VictoryArea} from 'victory-native';
import {defaultData} from '../../constants/data';

const AreaChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryArea style={{data: {fill: '#c43a31'}}} data={defaultData} />
    </VictoryChart>
  );
};

export default AreaChart;
