import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Switch,
  SafeAreaView,
} from 'react-native';
import LineChartComponent from './components/lineChart/LineChartComponent';
import BarChartComponent from './components/barChart/BarChartComponent';
import ContributionGraphComponent from './components/contributionGraph/ContributionGraphComponent';
import PieChartComponent from './components/pieChart/PieChartComponent';
import ProgressBarChartComponent from './components/progressChart/ProgressChartComponent';
import StackedBarChartComponent from './components/stackedBarChart/StackedBarChartComponent';

const chartTypes = [
  'line',
  'bar',
  'pie',
  'progress',
  'stackedBar',
  'contributionGraph',
];

const App = () => {
  const [selectedChart, setSelectedChart] = useState(chartTypes[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSwitchChange = type => {
    setSelectedChart(type);
  };

  const renderChart = () => {
    switch (selectedChart) {
      case chartTypes[0]:
        return <LineChartComponent />;
      case chartTypes[1]:
        return <BarChartComponent />;
      case chartTypes[2]:
        return <PieChartComponent />;
      case chartTypes[3]:
        return <ProgressBarChartComponent />;
      case chartTypes[4]:
        return <StackedBarChartComponent />;
      case chartTypes[5]:
        return <ContributionGraphComponent />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      {!modalVisible && (
        <View style={styles.listWrapper}>
          <Text>Select chart type:</Text>
          {chartTypes.map(item => {
            return (
              <View style={styles.listItem} key={item}>
                <View style={styles.textWrapper}>
                  <Text style={styles.typeText}>{item}</Text>
                </View>
                <Switch
                  value={selectedChart === item}
                  onChange={() => handleSwitchChange(item)}
                />
              </View>
            );
          })}
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {renderChart()}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
      {!modalVisible && (
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Chart</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100,
  },
  typeText: {
    fontSize: 24,
  },
  listWrapper: {
    marginBottom: 20,
  },
  textWrapper: {
    marginRight: 10,
  },
  listItem: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
