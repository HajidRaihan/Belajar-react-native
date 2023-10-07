/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const PostButton = props => {
  const {buttonTitle} = props;
  const color = {
    buttonRed: 'red',
  };
  return (
    <>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    backgroundColor: '#2DC220',
    borderRadius: 3,
    width: 120,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default PostButton;
