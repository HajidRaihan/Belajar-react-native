/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text} from 'react-native';

const PostDate = () => {
  return (
    <>
      <Text style={styles.dateText}>18 September 2023 | 20.15</Text>
    </>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 11,
  },
});

export default PostDate;
