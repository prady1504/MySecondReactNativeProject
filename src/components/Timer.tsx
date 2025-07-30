import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Elapsed Time:</Text>
      <Text style={styles.time}>{seconds} {seconds > 1 ? 'seconds' : 'second'}</Text>
    </View>
  );
}

export default TimerComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EEE',
    borderRadius: 12,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF40',
  },
});