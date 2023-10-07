/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import HomeIcon from '../asset/icon/home-icon.svg';
import CircledMenuIcon from '../asset/icon/Circled-Menu.png';
import NotifIcon from '../asset/icon/Notification.png';
import AvatarIcon from '../asset/icon/avatar-icon.png';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput style={styles.input} placeholder="search" />
        <TouchableOpacity style={styles.button}>
          <Image source={CircledMenuIcon} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Laporan</Text>
        </TouchableOpacity>
        <Image source={NotifIcon} />
        <Image source={AvatarIcon} style={styles.avatarIcon} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 64,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 10,
    display: 'flex',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    // justifyContent: 'center',
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    width: '50%',
  },
  button: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
    shadowColor: 'none',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  buttonText: {
    color: 'black',
  },
  buttonIcon: {
    width: 15,
    height: 15,
  },
  avatarIcon: {
    width: 30,
    height: 30,
  },
});

export default NavigationBar;
