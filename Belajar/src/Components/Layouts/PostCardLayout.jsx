/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import PostCard from '../PostCard';

const PostCardLayout = () => {
  return (
    <View style={styles.postCardWrapper}>
      <PostCard buttonTitle="Selesai" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />

      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
      <PostCard buttonTitle="Ditindak Lanjuti" />
    </View>
  );
};

const styles = StyleSheet.create({
  postCardWrapper: {
    gap: 10,
    marginTop: 15,
  },
});

export default PostCardLayout;
