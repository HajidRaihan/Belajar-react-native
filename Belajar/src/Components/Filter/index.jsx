/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Laporan from './Laporan';
import Riwayat from './Riwayat';
import Total from './Total';

const Filter = () => {
  return (
    <View style={styles.filterWrapper}>
      <Riwayat />
      <Total />
      <Laporan />
    </View>
  );
};

const styles = StyleSheet.create({
  filterWrapper: {
    marginStart: 10,
    width: '70%',
  },
});

export default Filter;
