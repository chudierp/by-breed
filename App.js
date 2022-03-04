
import * as React from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './homescreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   kav: {
//     flex: 1,
//     justifyContent: 'center',
//     width: '100%',
//   },
//   listContainer: {
//     width: '100%',
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   search: {
//     fontSize: 24,
//     padding: 10,
//     margin: 2,
//     borderWidth: 1
//   }
// });

