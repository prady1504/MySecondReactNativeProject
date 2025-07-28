/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Counter from './src/components/Counter';
import Card from './src/components/Card';
import GreetingCard from './src/UI/greetingcard';
import TogglesProject from './src/UI/togglesProject';
import TimerComponent from './src/components/Timer';
import ToDo from './src/UI/ToDo';
import Grid from './src/UI/grid';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <GreetingCard /> */}
      {/* <TogglesProject /> */}
      <TimerComponent />
      {/* <ToDo /> */}
      {/* <Grid /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  text: {
    color: 'white',
    fontSize: 60,
    textAlign: 'center',
    marginTop: 50,
  }
});

export default App;
