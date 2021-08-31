import React from 'react';
import {
  VictoryChart,
  VictoryTheme,
  VictoryPie,
  VictoryContainer,
} from 'victory-native';
import {pieData} from '../../constants/data';

const PieChart = () => {
  return <VictoryPie data={pieData} theme={VictoryTheme.material} />;
};

export default PieChart;
