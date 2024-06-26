import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Footer from '../components/footer';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../components/store';
import { useNavigation, useRoute } from '@react-navigation/native'


export default function Settings () {

  const navigation = useNavigation ();

  const [activePage, setActivePage] = useState ('Settings');
  
  const route = useRoute ();

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      setActivePage(route.name);
    });

    return unsubscribe;
  }, [navigation, route]);

  
  
  const isDarkMode = useSelector(state => state.theme.isDarkMode)
  const dispatch = useDispatch ()

  const handleToggle = () => {
    dispatch (toggleTheme())
  };

    return (
      <View style={[styles.container, isDarkMode? styles.darkContainer : styles.container]}>
          
          <View style={styles.pageName}>
           <Text style={[styles.settingsTextProperties, isDarkMode? styles.darkText : styles.settingsTextProperties]}> Settings </Text>
          </View>

          <View style={styles.settingsFunctionsContainer}>
            
            <View style={styles.individualSettingsFunctions}>  
              <Text style={[styles.settingsFunctions, isDarkMode? styles.darkSettingsFunctions : styles.settingsFunctions ]}> Language </Text>
              <AntDesign name="right" size={23} color="grey" style={styles.lanMypArrowIcons}/>
            </View>
              <View style={styles.line}></View>

              <View style={styles.individualSettingsFunctions}>  
              <Text style={[styles.settingsFunctions, isDarkMode? styles.darkSettingsFunctions : styles.settingsFunctions ]}> My Profile </Text>
              <AntDesign name="right" size={23} color="grey" style={styles.lanMypArrowIcons}/>
            </View>
              <View style={styles.line}></View>

              <View style={styles.individualSettingsFunctions}>  
              <Text style={[styles.settingsFunctions, isDarkMode? styles.darkSettingsFunctions : styles.settingsFunctions ]}> Contact Us </Text>
              <AntDesign name="right" size={23} color="grey" style={styles.cuArrowIcons}/>
            </View>
              <View style={styles.line}></View>

              <View style={styles.individualSettingsFunctions}>  
              <Text style={[styles.settingsFunctions, isDarkMode? styles.darkSettingsFunctions : styles.settingsFunctions ]}> Change Password </Text>
              <AntDesign name="right" size={23} color="grey" style={styles.cpArrowIcons}/>
            </View>
              <View style={styles.line}></View>

              <View style={styles.individualSettingsFunctions}>  
              <Text style={[styles.settingsFunctions, isDarkMode? styles.darkSettingsFunctions : styles.settingsFunctions ]}> Privacy Policy </Text>
              <AntDesign name="right" size={23} color="grey" style={styles.ppArrowIcons}/>
            </View>
              <View style={styles.line}></View>

              <View style={styles.themeAndButton}> 
                <Text style={[styles.themeProperties, isDarkMode? styles.darkThemeProperties: styles.themeProperties]}> Theme </Text>

                  <TouchableOpacity style={[styles.toggleButton, isDarkMode? styles.darkToggleButton : styles.toggleButton ]} onPress={handleToggle}>
                    <View style={styles.whiteBall} ></View>
                  </TouchableOpacity>

              </View>

          <View style={styles.footer}>
          <Footer activePage={activePage}/>    
          </View> 

          </View> 

       
  
      </View>
    );
  }

  const styles = StyleSheet.create ({
    container: {
      paddingTop: 80,
      paddingLeft: 20,
      flex: 1,
      backgroundColor: "white"
    },

    darkContainer: {
      backgroundColor: "black"
    },

    pageName: {
      height: 40,
      width: 335,
      alignItems: "center",
      justifyContent: "center"
    },

    settingsTextProperties: {
      fontWeight: "500",
      fontSize: 24
    },

    darkText: {
      color: "white"
    },

    settingsFunctionsContainer: {
      top: 60,
      height: 500,
      width: 335,
      gap: 20,
    },

    settingsFunctions: {
      fontSize: 24,
      fontWeight: "500",
      color: "black"
    },

    darkSettingsFunctions: {
      color: "white"
    },

    line: {
      height: 1,
      width: 335,
      backgroundColor: "lightgrey",
    },

    individualSettingsFunctions: {
      flex: "display",
      flexDirection: "row",
    },

    lanMypArrowIcons: {
      left: 200
    },

    cuArrowIcons: {
      left: 188
    },

    cpArrowIcons: {
      left: 118
    },

    ppArrowIcons: {
      left: 160
    },

    themeProperties: {
      fontSize: 25,
      fontWeight: "500",
      color: "black"
    },

    darkThemeProperties: {
      color: "white"
    },

    themeAndButton: {
      top: 30,
      display: "flex",
      flexDirection: "row",
      gap: 200
    },

    toggleButton: {
      width: 50,
      height: 30,
      borderRadius: 15,
      backgroundColor: "darkgrey",
      alignSelf: "flex-end",
      alignContent: "flex-start",
      paddingLeft: 2,
      paddingTop: 2.3
    },

    darkToggleButton: {
      paddingLeft: 20,
      backgroundColor: "lightgreen"
    },

    whiteBall: {
      height: 25,
      width: 26,
      borderRadius: 16,
      backgroundColor: "white"
    },

    footer: {
      top: 170,
      paddingLeft: 5
    }

  
  })

