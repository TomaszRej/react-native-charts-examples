import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const styles = {
  marginVertical: 8,
  borderRadius: 16,
};

const PieChartComponent = () => {
  return (
    <PieChart
      data={[
        {
          name: 'Seoul',
          population: 21500000,
          color: 'rgba(131, 167, 234, 1)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Toronto',
          population: 2800000,
          color: '#F00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Beijing',
          population: 527612,
          color: 'red',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'New York',
          population: 8538000,
          color: '#eee',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
        {
          name: 'Moscow',
          population: 11920000,
          color: 'rgb(0, 0, 255)',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        },
      ]}
      accessor="population"
      backgroundColor="#fb8c00"
      width={Dimensions.get('window').width}
      height={220}
      yAxisLabel="$"
      showBarTops={true}
      showValuesOnTopOfBar={true}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      style={{...styles}}
    />
  );
};

export default PieChartComponent;
