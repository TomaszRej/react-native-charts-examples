import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const styles = {
  marginVertical: 8,
  borderRadius: 16,
};

const ProgressChartComponent = () => {
  return (
    <ProgressChart
      data={{
        labels: ['Swim', 'Bike', 'Run'], // optional
        data: [0.4, 0.6, 0.8],
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
      }}
      style={{...styles}}
    />
  );
};

export default ProgressChartComponent;
