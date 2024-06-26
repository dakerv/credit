import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import profileimage from '../assets/profile.png'
import searchIcon from '../assets/blackSearchImage.png';
import darkSearchIcon from '../assets/whiteSearchImage.png';
import creditCard from '../assets/Card.png';
import GreyImageBackgrounds from '../components/greyImageBackgrounds';
import sendImage from '../assets/blackArrowUp.png';
import recieve from '../assets/blackArrowDown.png';
import loan from '../assets/loan.png';
import topUp from '../assets/topUp.png';
import TransactionContainers from '../components/transactionContainers';
import appleLogo from '../assets/apple.png';
import spotifyLogo from '../assets/spotify.png';
import iconLogo from '../assets/icon.png';
import groceryLogo from '../assets/grocery.png';
import Footer from '../components/footer';
import { useSelector } from 'react-redux';
import darkAppleLogo from '../assets/icons8-apple-logo-50.png';
import darkSendImage from '../assets/icons8-arrow-up-24.png';
import darkRecieve from '../assets/icons8-arrow-down-24.png';
import darkLoan from '../assets/icons8-dollar-sign-32.png';
import darkTopUp from '../assets/icons8-upload-to-cloud-50.png';
import { useNavigation, useRoute } from '@react-navigation/native'



export default function Home () {

  const [ activePage, setActivePage ] = useState ('Home');
  const navigation = useNavigation ();
  const route = useRoute ();

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      setActivePage(route.name);
    });

    return unsubscribe;
  }, [navigation, route]);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const transactions = [
    {key: "1", source: isDarkMode? darkAppleLogo : appleLogo, company: "Apple Store", description: "Entertainment", price: "-$5.99"}, 
    {key: "2", source: spotifyLogo, company: "Spotify", description: "Music", price: "        -$12.99"},
    {key: "3", source: iconLogo, company: "Money transfer", description: "Transaction", price: "$300"},
    {key: "4", source: groceryLogo, company: "Grocery", description: "Food", price: "       -$88"},

  ]

  const renderTransactions = ({ item }) => (
    <TransactionContainers
    source={item.source}
    company={item.company}
    description={item.description}
    price={item.price}>
    </TransactionContainers>
  )

  return (
    <View style={[styles.container, isDarkMode? styles.darkContainer : styles.container ]}>

      <View style={styles.appHeader}>

      <Image source={profileimage}
      style={styles.profileImageProperties}/>
      <Text style={styles.welcomeProperties}> Welcome back, </Text>
      
      <View style={[styles.searchIconBackground, isDarkMode? styles.darkSearchIconBackground : styles.searchIconBackground]}>
      <Image source={ isDarkMode? darkSearchIcon : searchIcon} />
      </View>

      </View>

      <Text style={[styles.ericAtsu, isDarkMode? styles.darkEricAtsu : styles.ericAtsu]}> Eric Atsu </Text>

      <View style={styles.creditCardProperties}>
        <Image source={creditCard} />
      </View>

      <View style={styles.functionsContainer}>
      <GreyImageBackgrounds source={ isDarkMode? darkSendImage : sendImage }></GreyImageBackgrounds>
      <GreyImageBackgrounds source={ isDarkMode? darkRecieve : recieve }></GreyImageBackgrounds>
      <GreyImageBackgrounds source={ isDarkMode? darkLoan : loan }></GreyImageBackgrounds>
      <GreyImageBackgrounds source={ isDarkMode? darkTopUp : topUp }></GreyImageBackgrounds>
      </View>

      <View style={styles.functionNames}>
        <Text style={[styles.functions, isDarkMode? styles.darkFunctions : styles.functions]}> Sent </Text>
        <Text style={[styles.functions, isDarkMode? styles.darkFunctions : styles.functions]}> Recieve </Text>
        <Text style={[styles.functions, isDarkMode? styles.darkFunctions : styles.functions]}> Loan </Text>
        <Text style={[styles.functions, isDarkMode? styles.darkFunctions : styles.functions]}> Top Up </Text>
      </View>

      <View style={styles.transactionAndSellall}>
        <Text style={[styles.transactionText, isDarkMode? styles.darkTransactionText : styles.transactionText]}> Transactions </Text>
        <Text style={styles.sellAllText}> Sell All </Text>
      </View>


      <View style={styles.transactionContainersVertical}>
       <View style={styles.transactionContainersHorizontal}>
        <FlatList
        data={transactions}
        renderItem={renderTransactions}
        keyExtractor={item => item.key} 
        >
        </FlatList>
       </View>
      </View>

      <View style={styles.footerProperties}>
        <Footer activePage={activePage}/>
      </View>


      
  
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingLeft: 20,
  },

  darkContainer: {
    backgroundColor: 'black'
  },

  appHeader: {
    width: 200,
    height: 80,
    display: "flex",
    flexDirection: "row"
  },

  welcomeProperties: {
    color: "gray",
    top: 13,
    fontSize: 20
  },

  profileImageProperties: {
    width: 80,
    height: 80,
  },

  ericAtsu: {
  color: "black",
  fontSize: 30,
  left: 80,
  bottom: 40
  },

  darkEricAtsu: {
    color: "white"
  },

  searchIconBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    left: 70,
    top: 17
  },

  darkSearchIconBackground: {
    backgroundColor: "#1F1E2E"
  },

  creditCardProperties: {
    top: 10
  },

  functionsContainer: {
    top: 30,
    width: 335,
    height: 80,
    flex: "display",
    flexDirection: "row",
    paddingTop: 7,
    gap: 45
  },

  functionNames: {
    width: 335,
    height: 30,
    flex: "display",
    flexDirection: "row",
    gap: 43,
    top: 20
  },

  functions: {
    fontSize: 17,
    fontWeight: "400"
  },

  darkFunctions: {
    color: "white"
  },

  transactionAndSellall: {
    width: 335,
    height: 20,
    display: "flex",
    flexDirection: "row",
    gap: 150,
    top: 40,
  },

  transactionText: {
    fontSize: 20
  },

  darkTransactionText: {
    color: "white"
  },

  sellAllText: {
    fontSize: 20,
    color: "blue"
  },

  transactionContainersVertical: {
    height: 160,
    width: 500,
    gap: 20,
    flex: "display",
    flexDirection: "column",
    top: 10
  },

  transactionContainersHorizontal: {
    top: 50
  },

  footerProperties: {
    top: 60
  }
});
