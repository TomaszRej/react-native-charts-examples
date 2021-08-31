import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import LineChart from './src/components/lineChart/LineChart';
import BarChart from './src/components/barChart/BarChart';
import Group from './src/components/group/Group';
import AreaChart from './src/components/areaChart/AreaChart';
import PieChart from './src/components/pieChart/PieChart';
import ScatterChart from './src/components/scatterChart/ScatterChart';
import PolarAxisChart from './src/components/polarAxisChart/PolarAxisChart';
import StackChart from './src/components/stackChart/StackChart';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LineChart />
        <BarChart />
        <Group />
        <AreaChart />
        <PieChart />
        <ScatterChart />
        <PolarAxisChart />
        <StackChart />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
