import React from "react";
import {Text,View,StyleSheet,Image,ScrollView,Linking, FlatList} from "react-native";
import { SocialIcon } from 'react-social-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Amazon = ()=>{
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 150}}  resizeMode="contain" source={require('../dp/manika.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Ms. Manika Shrivastava</Text>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>SDE-I</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/manika-shrivastava-262438191/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}} onPress={() => Linking.openURL('mailto:') }/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Skills</Text>
                <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 150}}  resizeMode="contain" source={require('../dp/abusaleh.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Ms. Abusaleh Khan</Text>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>SDE-I</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/abusaleh-khan-3961451a4/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}} onPress={() => Linking.openURL('mailto:abusaleh.khan12@gmail.com') }/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Skills</Text>
                <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbe76',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    item: {
        color: '#fff',
        backgroundColor: '#2c2c54',
        alignSelf:'center',
        margin: 10 ,
        padding: 10,
        fontSize: 18,
        height: 44,
        borderRadius: 20,
    },
})

export default Amazon;