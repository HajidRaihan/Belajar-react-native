/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import PostImg from '../../asset/img/petani1.png';

const PostImage = () => {
  return (
    <>
      <Image source={PostImg} style={styles.cardImage} />
    </>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    height: 'auto',
    resizeMode: 'cover',
    width: '35%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default PostImage;
