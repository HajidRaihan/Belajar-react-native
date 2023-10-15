/* eslint-disable prettier/prettier */
import {React, useState, useMemo} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import CircledMenuIcon from '../../asset/icon/Circled-Menu.png';
import BookIcon from '../../asset/icon/Book.png';
import ReportIcon from '../../asset/icon/Error.png';

import RadioGroup from 'react-native-radio-buttons-group';
import {RadioButton} from 'react-native-paper';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Laporan = () => {
  const [checked, setChecked] = useState('first');
  const [value, setValue] = useState('first');

  return (
    <View style={styles.riwayatWrapper}>
      <Text style={styles.title}>FIlter Laporan Masalah</Text>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={styles.radioButton}>
          <RadioButton value="first" color={'black'} />
          <Text>Semua Masalah</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="second" color={'black'} />
          <Text>Masalah Masuk</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="third" color={'black'} />
          <Text>Masalah Ditindaklanjuti</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton value="fourth" color={'black'} />
          <Text>Masalah Selesai</Text>
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  riwayatWrapper: {
    marginTop: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 10,
  },
  semuaWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
    marginStart: 5,
  },
  produksiWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
    marginStart: 5,
  },
  masalahWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
    marginStart: 5,
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

export default Laporan;
