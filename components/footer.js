import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import homeIcon from '../assets/home.png';
import myCardsIcon from '../assets/myCards.png';
import statisticsIcon from '../assets/statictics.png';
import settingsIcon from '../assets/settings.png';
import { useNavigation } from '@react-navigation/native';



const Footer = () => {
    const navigation = useNavigation();

    return(

    <View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={ () => navigation.navigate ('Settings')} >
           <Image source = {homeIcon} />
          </TouchableOpacity>

        <Image source = {myCardsIcon} />
        <Image source = {statisticsIcon} />
        
        <TouchableOpacity onPress={ () => navigation.navigate ('Home')} >
           <Image source = {settingsIcon} />
          </TouchableOpacity>

        </View>
     
        <View style={styles.textContainer}>
        <Text style={styles.pageText}> Home </Text>
        <Text style={styles.pageText}> My Cards </Text>
        <Text style={styles.pageText}> Statistics </Text>
        <Text style={styles.pageText}> Settings </Text>
        </View>
    </View>

    
)};

const styles = StyleSheet.create ({
    iconsContainer: {
    width: 335,
    height: 50,
    display: "flex",
    flexDirection: "row",
    gap: 80,
    top: 10
    },
    
    pageIcons: {
    width: 20,
    height: 20
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
    }
}) 

export default Footer;