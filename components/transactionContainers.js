import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GreyImageBackgrounds from "./greyImageBackgrounds";
import { useSelector } from "react-redux";

const TransactionContainers = ({ source, company, description, price }) => {

  const isDarkMode = useSelector (state => state.theme.isDarkMode)

  const priceStyle = company === 'Money transfer' ? styles.bluePrice : styles.defaultPrice;
  const darkModePriceStyle = company === 'Money transfer' ? styles.bluePrice : styles.lightPrice

    return(
        <View>
          <View style={styles.container}>
            <GreyImageBackgrounds source={source}/>
            <Text style={[styles.companyProperties, isDarkMode? styles.darkCompanyProperties : styles.companyProperties]}>{company}</Text>
            <Text style={[priceStyle, isDarkMode? darkModePriceStyle : styles.priceStyle]}>{price}</Text>
          </View>

          <View>
            <Text style={styles.descriptionProperties}>{description}</Text>
          </View>

        </View>
        
        
       
    )
} 

const styles = StyleSheet.create ({
    container: {
       flex: "display",
       flexDirection: "row",
       gap: 20
    },

    companyProperties: {
        fontWeight: "500",
        fontSize: 22,
    },

    darkCompanyProperties: {
      color: "white"
    },

    descriptionProperties: {
        color: "gray",
        fontSize: 15,
        left: 70,
        bottom: 26
    },

    darkDescriptionProperties: {
      color: "white"
    },

    defaultPrice: {
        fontWeight: "500",
        fontSize: 24,
        left: 58,
        top: 4,
        color: "black"
    },

    lightPrice: {
      color: "white"
    },

    darkDefaultPrice: {
      color: "white"
    },

    bluePrice: {
      fontWeight: "500",
        fontSize: 24,
        left: 35,
        top: 4,
        color: "blue"
    }
})

export default TransactionContainers;