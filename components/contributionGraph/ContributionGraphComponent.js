import React from 'react';
import {ContributionGraph} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const styles = {
  marginVertical: 8,
  borderRadius: 16,
};

const ContributionGraphComponent = () => {
  return (
    <ContributionGraph
      values={[
        {date: '2016-01-02', count: 1},
        {date: '2016-01-03', count: 2},
        {date: '2016-01-04', count: 3},
        {date: '2016-01-05', count: 4},
        {date: '2016-01-06', count: 5},
        {date: '2016-01-30', count: 2},
        {date: '2016-01-31', count: 3},
        {date: '2016-03-01', count: 2},
        {date: '2016-04-02', count: 4},
        {date: '2016-03-05', count: 2},
        {date: '2016-02-30', count: 4},
      ]}
      width={Dimensions.get('window').width}
      height={220}
      endDate={new Date('2016-05-01')}
      numDays={105}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      style={{...styles}}
    />
  );
};

export default ContributionGraphComponent;
