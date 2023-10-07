/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import CircledMenuIcon from '../../asset/icon/Circled-Menu.png';
import BookIcon from '../../asset/icon/Book.png';
import ReportIcon from '../../asset/icon/Error.png';

const Riwayat = () => {
  return (
    <View style={styles.riwayatWrapper}>
      <Text style={styles.title}>Riwayat Laporan</Text>
      <View style={styles.semuaWrapper}>
        <Image source={CircledMenuIcon} style={styles.semuaIcon} />
        <Text> Semua</Text>
      </View>
      <View style={styles.produksiWrapper}>
        <Image source={BookIcon} style={styles.produksiIcon} />
        <Text> Produksi</Text>
      </View>
      <View style={styles.masalahWrapper}>
        <Image source={ReportIcon} style={styles.masalahIcon} />
        <Text> Masalah</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  riwayatWrapper: {
    marginTop: 10,
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

export default Riwayat;
