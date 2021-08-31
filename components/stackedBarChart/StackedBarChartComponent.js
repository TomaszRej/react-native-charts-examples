import React from 'react';
import {StackedBarChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const styles = {
  marginVertical: 8,
  borderRadius: 16,
};

const StackedBarChartComponent = () => {
  return (
    <StackedBarChart
      data={{
        labels: ['Test1', 'Test2'],
        legend: ['L1', 'L2', 'L3'],
        data: [
          [60, 60, 60],
          [30, 30, 60],
        ],
        barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
      }}
      formatYLabel={(yLabel: string) => parseInt(yLabel, 10)}
      width={Dimensions.get('window').width}
      height={220}
      chartConfig={{
        backgroundColor: '#eeeeee',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      style={{...styles}}
    />
  );
};

export default StackedBarChartComponent;
