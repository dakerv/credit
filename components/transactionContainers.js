import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GreyImageBackgrounds from "./greyImageBackgrounds";

const TransactionContainers = ({ source, company, description, price }) => {

  const priceStyle = company === 'Money transfer' ? styles.bluePrice : styles.defaultPrice;

    return(
        <View>
          <View style={styles.container}>
            <GreyImageBackgrounds source={source}/>
            <Text style={styles.companyProperties}>{company}</Text>
            <Text style={priceStyle}>{price}</Text>
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

    descriptionProperties: {
        color: "gray",
        fontSize: 15,
        left: 70,
        bottom: 26
    },

    defaultPrice: {
        fontWeight: "500",
        fontSize: 24,
        left: 58,
        top: 4
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