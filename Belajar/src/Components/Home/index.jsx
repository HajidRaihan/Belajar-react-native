/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
} from 'react-native';
import NavigationBar from '../NavigationBar';

import Carousel from './Carousel';
import Content from './Content';
import HorizontalLine from './HorizontalLine';
import Card from './Card';
import Footer from './Footer';

const HomeLayout = () => {
  return (
    <ScrollView>
      <NavigationBar />
      <View>
        <Carousel />
        <Content />
        <HorizontalLine />
        <View style={styles.cardWrapper}>
          <Text style={styles.title}>Petani Garam</Text>
          <Card title="petani 1" />
          <Card title="petani 2" />
          <Card title="petani 3" />
          <Card title="petani 4" />
          <Card title="petani 5" />
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: '100%',
    height: 200,
    backgroundColor: 'grey',
  },
  content: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 20,
    marginHorizontal: 15,
    textAlign: 'justify',
  },
  horizontalLine: {
    borderWidth: 0.5,
    borderColor: 'grey',
    marginVertical: 20,
  },
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
  footer: {
    height: 150,
    width: '100%',
    backgroundColor: '#4D7B97',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    color: 'white',
    fontSize: 15,
  },
});

export default HomeLayout;
