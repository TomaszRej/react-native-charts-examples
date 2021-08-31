import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import BasicLineChart from './src/components/basic/BasicLineChart';
import MultipleLinesChart from './src/components/multipleLine/MultipleLinesChart';
import TooltipChart from './src/components/tooltip/TooltipChart';
import ScrollableChart from './src/components/scrollable/ScrollableChart';
import MultipleAreaChart from './src/components/multipleArea/MultipleAreaChart';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollableChart />
        <BasicLineChart />
        <MultipleLinesChart />
        <MultipleAreaChart />
        <TooltipChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
