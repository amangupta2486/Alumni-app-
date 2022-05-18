import React from "react";
import {Text,View,StyleSheet,Image,ScrollView,Linking,TouchableOpacity, FlatList} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Foundation } from '@expo/vector-icons';

const Amazon = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 100}}  resizeMode="contain" source={require('../dp/anupriy.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Mr. Anupriy Panday</Text>
                <Text style={{color: '#130f40',fontSize: 25,}}>SDE-I</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/anupriy-pandey/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}}/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Skills</Text>
                <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        </View>
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


// <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>C++</Text></TouchableOpacity>
//                 <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>Python</Text></TouchableOpacity>
//                 <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>Python</Text></TouchableOpacity>
//                 <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>Machine Learning</Text></TouchableOpacity>
//                 <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>Keras</Text></TouchableOpacity>
//                 <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>Deep Learning</Text></TouchableOpacity>
//                 <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>Artificial Intelligence</Text></TouchableOpacity>
//                 <TouchableOpacity ><Text style={{backgroundColor: '#c0392b',color: '#fff',alignSelf:'flex-start',fontSize: 23,borderRadius: 6,marginTop: 4,marginLeft: 4}}>Java</Text></TouchableOpacity>