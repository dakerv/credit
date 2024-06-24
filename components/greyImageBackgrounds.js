import React from "react";
import { View, StyleSheet, Image } from 'react-native';

const GreyImageBackgrounds = ({source}) => {
    return (
        <View style={styles.container}>
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

    images: {
        width: 16,
        height: 20
    }
})

export default GreyImageBackgrounds;
