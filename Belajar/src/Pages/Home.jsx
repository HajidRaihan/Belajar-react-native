/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HomeLayout from '../Components/Home';
import PostCardLayout from '../Components/Layouts/PostCardLayout';
import NavigationBar from '../Components/NavigationBar';
import PostCard from '../Components/PostCard';

const Home = () => {
  return (
    <View>
      <NavigationBar />
      <ScrollView>
        <PostCardLayout />
      </ScrollView>
    </View>
  );
};

export default Home;
