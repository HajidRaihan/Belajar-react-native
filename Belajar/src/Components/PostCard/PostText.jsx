/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const PostText = () => {
  return (
    <>
      <Text style={styles.cardText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        minima.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  cardText: {
    fontSize: 12,
    maxWidth: '80%',
  },
});

export default PostText;
