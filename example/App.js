import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, Linking} from 'react-native';
import BoxedShare from './src/Component/BoxedShare';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class App extends Component{
  render(){
    return(
      <View style={styles.ViewStyle}>
        <TouchableOpacity onPress={() => {Linking.openURL('https://github.com/ugurrdemirel/ReactNativeSocialShareButtons')}}>
        <Image style={{marginBottom: 10}} source={require('./src/image/githubLogo.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.TitleText}>Welcome to React Native Social Share Buttons Example</Text>
        <Text style={styles.SubTitle}>Styles</Text>
        <Text style={styles.StyleTitle}>1) Boxed Share Area</Text>
        <BoxedShare 
        WhatsappMessage="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons" 
        FacebookShareURL="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons" 
        FacebookShareMessage="Hey, I find great react-native component on github" 
        TwitterShareURL="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons"
        TwitterShareMessage="Hey, I find great react-native component on github" 
        TwitterViaAccount="ugurr_demirel" 
        NativeShareTitle="React Native Social Share Buttons" 
        NativeShareMessage="Hey, I find great react-native component on github" 
        NativeShareURL="https://github.com/ugurrdemirel/ReactNativeSocialShareButtons"
        />
        <Text style={styles.SubTitle}>This is an initial release and I will add more styles soon. You can check the latest version on my repository page. Click the github logo and go to repository page</Text>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  ViewStyle: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  TitleText: {
    fontSize: 22,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom: 20
  },
  SubTitle: {
    fontSize: 18,
    textAlign:'center',
    marginBottom: 10
  },
  StyleTitle: {
    fontSize: 22,
    textAlign:'center',
    marginBottom: 10
  }
});