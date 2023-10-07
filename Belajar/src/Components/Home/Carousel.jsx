/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Carousel = () => {
  return (
    <View style={styles.carousel}>
      <Text>Ini Carousel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: '100%',
    height: 200,
    backgroundColor: 'grey',
  },
});

export default Carousel;
