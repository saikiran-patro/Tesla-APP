/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CarItem from  "./Components/CarItem/index"



const App= () => {
  
  return (
    <>
    
    
    
    <View >
    
       <CarItem></CarItem>
       <StatusBar style="auto"/>
    </View>
    </>
  );
};



export default App;
