import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const styles = {
  marginVertical: 8,
  borderRadius: 16,
};

const LineChartComponent = () => {
  return (
    <LineChart
      data={{
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel="$"
      showBarTops={true}
      showValuesOnTopOfBar={true}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

        propsForBackgroundLines: {
          stroke: 'rgba(255, 255, 255, 0.3)',
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
        },
      }}
      bezier
      style={{...styles}}
    />
  );
};

export default LineChartComponent;
