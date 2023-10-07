/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import EditIcon from '../../asset/icon/Edit.png';
import DeleteIcon from '../../asset/icon/Delete.png';
import EyeIcon from '../../asset/icon/Eye.png';
import BubbleIcon from '../../asset/icon/speech-bubble.png';
import PostImage from './PostImage';
import PostButton from './PostButton';
import PostEdit from './PostEdit';
import PostDate from './PostDate';
import PostText from './PostText';
import PostKomen from './PostKomen';

const PostCard = props => {
  const {buttonTitle} = props;
  return (
    <View style={styles.cardContainer}>
      <PostImage />
      <View style={styles.cardBody}>
        <PostButton buttonTitle={buttonTitle} />
        <PostEdit />
        <PostDate />
        <PostText />
        <PostKomen />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 'auto',
    marginHorizontal: 20,
    height: 150,
    borderWidth: 0.5,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  cardBody: {
    display: 'flex',
    justifyContent: 'center',
    gap: 5,
  },
});

export default PostCard;
