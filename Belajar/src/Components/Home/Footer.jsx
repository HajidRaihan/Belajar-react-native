/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.textFooter}>Hubungi Kami | Bantuan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 150,
    width: '100%',
    backgroundColor: '#4D7B97',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    color: 'white',
    fontSize: 15,
  },
});

export default Footer;
