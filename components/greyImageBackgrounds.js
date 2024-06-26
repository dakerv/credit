import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import { useSelector } from "react-redux";

const GreyImageBackgrounds = ({source}) => {
    
    const isDarkMode = useSelector(state => state.theme.isDarkMode);
    
    return (
        <View style={[styles.container, isDarkMode? styles.darkContainer : styles.container]}>
            <Image source = {source} 
            style={styles.images} />
        </View>   
    );
}

const styles = StyleSheet.create ({
    container: {
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: "#D3D3D3",
        alignItems: "center",
        justifyContent: "center",
    },

    darkContainer: {
        backgroundColor: "#1F1E2E"
    },

    images: {
        width: 20,
        height: 20
    }
})

export default GreyImageBackgrounds;
