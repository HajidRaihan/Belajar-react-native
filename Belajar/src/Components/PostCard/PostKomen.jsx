/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import EyeIcon from '../../asset/icon/Eye.png';
import BubbleIcon from '../../asset/icon/speech-bubble.png';

const PostKomen = () => {
  return (
    <View style={styles.komenLihatWrapper}>
      <View style={styles.komenWrapper}>
        <Image source={BubbleIcon} />
        <Text style={styles.komenText}>5 Komentar</Text>
      </View>
      <View style={styles.lihatWrapper}>
        <Image source={EyeIcon} />
        <Text style={styles.lihatText}>5 Melihat</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  komenLihatWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  komenWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  lihatWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  komenText: {
    fontSize: 11,
  },
  lihatText: {
    fontSize: 11,
  },
});

export default PostKomen;
