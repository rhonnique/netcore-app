import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
//const SmartechSDK = require('smartech-reactnative-module');
import SmartechSDK from "smartech-reactnative-module";

export default function App() {

  console.log(SmartechSDK, 'SmartechSDK_____')

  React.useEffect(() => {

    try {
      SmartechSDK.login("2348023232388");

      const payloadata = {
        NAMES: "Abel Adeola",
        EMAIL: "abel.adeola@gmail.com",
        DOB: "1990-03-01"
        //MOBILE: "2348023237743"
      };

      SmartechSDK.updateUserProfile(payloadata);
      //SmartechSDK.trackEvent("VIEW_PRODUCT", "Family shield plus");


      console.log(payloadata, 'payloadata___')
    } catch (error) {
      console.log(error, 'error___')
    }

    //SmartechSDK.trackEvent("VIEW_PRODUCT", "Family shield plus");
    //SmartechSDK.trackEvent("make_payment", ("12000").toString());
    //java

  }, []);

  const track = () => {
    try {
      SmartechSDK.trackEvent("VIEW_PRODUCT", "Family shield plus");
    } catch (error) {
      console.log(error, 'track_error____')
    }
  }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your appsss!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={track} style={{ padding: 20, backgroundColor: 'red', marginTop: 20 }}>
        <Text>track event</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
