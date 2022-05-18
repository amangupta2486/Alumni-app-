import React from 'react'
import { Image,StyleSheet, View,Dimensions,TouchableOpacity,ScrollView } from 'react-native'
import TextTicker from 'react-native-text-ticker'


const Home=({navigation}) =>{
    return(
      <ScrollView style={styles.container}>
        <TextTicker style={{fontSize: 35,backgroundColor: '#4cd137',color: '#fff',marginTop: 0,fontFamily: 'sans-serif-condensed'}} duration={7000} loop repeatSpacer={0}>
        Get Placed in your dream companies with our best Aluminis
        </TextTicker>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Airtel')}>
            <View style={styles.img}><Image style={{width: 250,height: 95,alignSelf: 'center'}} resizeMode='contain' source={require('../assets/airtel.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Amazon')}>
            <View style={styles.img}><Image style={{width: 270,height: 80,alignSelf: 'center'}} resizeMode='contain' source={require('../assets/amazon.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('BrowserStack')}>
            <View style={styles.img}><Image style={{width: 250,height: 120,alignSelf: 'center'}} resizeMode='contain' source={require('../assets/BrowserStack.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Cred')}>
            <View style={styles.img}><Image style={{width: 300,height: 140,alignSelf: 'center'}} source={require('../assets/cred.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Ericsson')}>
            <View style={styles.img}><Image style={{width: 250,height: 130,alignSelf: 'center'}} source={require('../assets/ericsson.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Freecharge')}>
            <View style={styles.img}><Image style={{width: 270,height: 55,alignSelf: 'center'}} source={require('../assets/freecharge.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('GEP')}>
            <View style={styles.img}><Image style={{width: 270,height: 85,alignSelf: 'center'}} source={require('../assets/gep.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Groww')}>
            <View style={styles.img}><Image style={{width: 280,height: 75,alignSelf: 'center'}} source={require('../assets/groww.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Microsoft')}>
            <View style={styles.img}><Image style={{width: 250,height: 75,alignSelf: 'center'}} source={require('../assets/microsoft.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Pickrr')}>
            <View style={styles.img}><Image style={{width: 250,height: 75,alignSelf: 'center'}} source={require('../assets/pickrr.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Qualcomm')}>
            <View style={styles.img}><Image style={{width: 300,height: 55,alignSelf: 'center'}} source={require('../assets/qualcomm.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Samsung')}>
            <View style={styles.img}><Image style={{width: 280,height: 93,alignSelf: 'center'}} source={require('../assets/samsung.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Tekion')}>
            <View style={styles.img}><Image style={{width: 250,height: 115,alignSelf: 'center'}} source={require('../assets/tekion.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Walmart')}>
            <View style={styles.img}><Image style={{width: 250,height: 115,alignSelf: 'center'}} source={require('../assets/walmart.png')}/></View>
        </TouchableOpacity>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 2.5,}}/>
        <TextTicker style={{fontSize: 35,color: 'green',marginTop: 0,fontWeight: 'bold',backgroundColor: '#4cd137',color: '#fff',}} duration={7000} loop repeatSpacer={50}>
        And Many More Coming........Stay Tuned............Happy Coding.....................
        </TextTicker>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  img: {
      alignItems: 'center',
      margin: 80,
    //   borderBottomColor: '#130f40',
    //   borderBottomWidth: 2.5,
  }
});

export default Home;