import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js';
import Started from './components/Started.js'
import Airtel from './companies/Airtel.js'
import Amazon from './companies/Amazon.js';
import BrowserStack from './companies/BrowserStack.js';
import Cred from './companies/Cred';
import Ericsson from './companies/Ericsson.js';
import Freecharge from './companies/Freecharge.js';
import GEP from './companies/GEP.js';
import Groww from './companies/Groww.js';
import Microsoft from './companies/Microsoft.js';
import Qualcomm from './companies/Qualcomm.js';
import Samsung from './companies/Samsung.js';
import Tekion from './companies/Tekion.js';
import Walmart from './companies/Walmart.js';
import Pickrr from './companies/Pickrr';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Started'>
        <Stack.Screen name="Welcome" component={Started}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Airtel" component={Airtel}/>
        <Stack.Screen name="Amazon" component={Amazon}/>
        <Stack.Screen name="BrowserStack" component={BrowserStack}/>
        <Stack.Screen name="Cred" component={Cred}/>
        <Stack.Screen name="Ericsson" component={Ericsson}/>
        <Stack.Screen name="Freecharge" component={Freecharge}/>
        <Stack.Screen name="GEP" component={GEP}/>
        <Stack.Screen name="Groww" component={Groww}/>
        <Stack.Screen name="Microsoft" component={Microsoft}/>
        <Stack.Screen name="Pickrr" component={Pickrr}/>
        <Stack.Screen name="Qualcomm" component={Qualcomm}/>
        <Stack.Screen name="Samsung" component={Samsung}/>
        <Stack.Screen name="Tekion" component={Tekion}/>
        <Stack.Screen name="Walmart" component={Walmart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
