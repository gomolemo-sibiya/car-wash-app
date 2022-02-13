import React from 'react';
import { View, StyleSheet } from 'react-native';
import { McText } from '../components';

const History = () => {
  return (
    <View style={styles.container}>
      <McText h1>Heading level 1</McText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default History;
