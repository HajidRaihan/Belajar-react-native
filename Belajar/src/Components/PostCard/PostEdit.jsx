/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import EditIcon from '../../asset/icon/Edit.png';
import DeleteIcon from '../../asset/icon/Delete.png';

const PostEdit = () => {
  return (
    <View style={styles.editDeleteWrapper}>
      <View style={styles.editWrapper}>
        <Image source={EditIcon} />
        <Text style={styles.editText}>Edit</Text>
      </View>
      <Text>|</Text>
      <View style={styles.deleteWrapper}>
        <Image source={DeleteIcon} />
        <Text style={styles.deleteText}>Delete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editDeleteWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  editWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  deleteWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
  },
  editText: {
    fontSize: 11,
  },
  deleteText: {
    fontSize: 11,
  },
});

export default PostEdit;
