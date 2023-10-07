/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import PetaniImage from '../../asset/img/petani.png';

const Card = props => {
  const {title} = props;
  return (
    <View style={styles.card}>
      <Image source={PetaniImage} style={styles.cardImage} />
      <View style={styles.cardTitleWrapper}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardDecWrapper}>
        <Text style={styles.cardDescTitle}>8 Anggota</Text>
        <Text style={styles.cardDesc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate,
          iste.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginVertical: 20,
    marginHorizontal: 'auto',
    width: '60%',
    height: 400,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
  },
  cardImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  cardTitleWrapper: {
    height: 50,
    width: '100%',
    backgroundColor: '#4D7B97',
    display: 'flex',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  cardDecWrapper: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  cardDescTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  cardDesc: {
    textAlign: 'center',
  },
});

export default Card;
