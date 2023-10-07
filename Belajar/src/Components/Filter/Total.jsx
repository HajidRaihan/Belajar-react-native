/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import CircledMenuIcon from '../../asset/icon/Circled-Menu.png';
import BookIcon from '../../asset/icon/Book.png';
import ReportIcon from '../../asset/icon/Error.png';

const Total = () => {
  return (
    <View style={styles.totalWrapper}>
      <Text style={styles.title}>Total Laporan</Text>
      <View style={styles.contentWrapper}>
        <View style={styles.mingguanWrapper}>
          <Text>Mingguan</Text>
          <Text>2</Text>
        </View>
        <View style={styles.bulananWrapper}>
          <Text>Bulanan</Text>
          <Text>15</Text>
        </View>
        <View style={styles.tahunanWrapper}>
          <Text>Tahunan</Text>
          <Text>20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalWrapper: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 10,
  },
  contentWrapper: {
    width: 150,
  },
  mingguanWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
    marginStart: 5,
    justifyContent: 'space-between',
  },
  bulananWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
    marginStart: 5,
    justifyContent: 'space-between',
  },
  tahunanWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
    marginStart: 5,
    justifyContent: 'space-between',
  },
  semuaIcon: {
    width: 20,
    height: 20,
  },
  produksiIcon: {
    width: 20,
    height: 20,
  },
  masalahIcon: {
    width: 20,
    height: 20,
  },
});

export default Total;
