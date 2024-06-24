import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Footer from '../components/footer';

export default function Settings ({ navigation }) {
    return (
      <View style={styles.container}>
  
        <Text> Hi </Text>

        <Footer />
  
      </View>
    );
  }

  const styles = StyleSheet.create ({
    container: {
      padding: 70
    }
  })