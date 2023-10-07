import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.horizontalLine} />;
};

const styles = StyleSheet.create({
  horizontalLine: {
    borderWidth: 0.5,
    borderColor: 'grey',
    marginVertical: 20,
  },
});

export default HorizontalLine;
