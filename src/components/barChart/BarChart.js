import React from 'react';
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory-native';
import {defaultData} from '../../constants/data';

const BarChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryBar style={{data: {fill: '#c43a31'}}} data={defaultData} />
    </VictoryChart>
  );
};

export default BarChart;
