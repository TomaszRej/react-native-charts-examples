import React from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryGroup,
} from 'victory-native';
import {defaultData} from '../../constants/data';

const BarChart = () => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryGroup colorScale="qualitative" offset={20}>
        <VictoryBar
          style={{data: {fill: '#c43a31'}}}
          data={defaultData}
          alignment="start"
        />
        <VictoryBar
          style={{data: {fill: 'green'}}}
          data={defaultData}
          alignment="start"
        />
      </VictoryGroup>
    </VictoryChart>
  );
};

export default BarChart;
