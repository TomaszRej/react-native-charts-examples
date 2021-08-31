import React from 'react';
import {VictoryTheme, VictoryChart, VictoryLine, Curve} from 'victory-native';
import {defaultData} from '../../constants/data';

const LineChart = () => {
  const handleClick = () => {
    alert('handling');
  };

  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: {stroke: '#c43a31'},
          parent: {border: '1px solid blue'},
        }}
        labels={({datum}) => datum.y}
        interpolation="natural"
        dataComponent={<Curve events={{onPress: handleClick}} />}
        animate={{
          duration: 2000,
          onLoad: {duration: 1000},
        }}
        data={defaultData}
      />
    </VictoryChart>
  );
};

export default LineChart;
