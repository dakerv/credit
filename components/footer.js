import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native';
import homeIcon from '../assets/home.png';
import myCardsIcon from '../assets/myCards.png';
import statisticsIcon from '../assets/statictics.png';
import settingsIcon from '../assets/settings.png';
import { useNavigation, useRoute } from '@react-navigation/native';



const Footer = ( { navigate }) => {

    const [ activePage, setActivePage ] = useState ('Home');
    const navigation = useNavigation ();
    const route = useRoute ();
  
    useEffect(() => {
      const unsubscribe = navigation.addListener('state', () => {
        setActivePage(route.name);
      });
  
      return unsubscribe;
    }, [navigation, route]);

    return(

    <View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate ('Home')} >
           <Image source = {homeIcon} 
           style={styles.imageOrientation}/>
          </TouchableOpacity>

        <Image source = {myCardsIcon}
        style={styles.imageOrientationMyCards} />

        <Image source = {statisticsIcon}
        style={styles.imageOrientation} />
        
        <TouchableOpacity onPress={ () => navigation.navigate ('Settings')} >
           <Image source = {settingsIcon} 
           style={styles.imageOrientationSettings}/>
          </TouchableOpacity>

        </View>
     
        <View style={styles.textContainer}>
        <Text style={[styles.pageText, activePage === 'Home' && styles.bluePageText]}> Home </Text>
        <Text style={styles.pageText}> My Cards </Text>
        <Text style={styles.pageText}> Statistics </Text>
        <Text style={[styles.pageText, activePage === 'Settings' && styles.bluePageText]}> Settings </Text>
        </View>
    </View>

    
)};

const styles = StyleSheet.create ({
    
    iconsContainer: {
    width: 350,
    height: 51,
    paddingTop: 5,
    display: "flex",
    flexDirection: "row",
    gap: 80,
    top: 10,
    right: 10,
    },
    
    imageOrientation: {
    left: 10,
    bottom: 2
    },

    imageOrientationSettings: {
    left: 15
    },

    imageOrientationMyCards: {
    left: 6,
    bottom: 2
    },

    textContainer: {
    width: 335,
    height: 30,
    display: "flex",
    flexDirection: "row",
    gap: 45,
    bottom: 26,
    right: 10
    },

    pageText: {
        fontSize: 13,
        color: "gray",
        alignSelf: "center",
    },

    bluePageText: {
        color: "blue"
    }
}) 

export default Footer;