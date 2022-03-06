// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen}/>
//         <Stack.Screen name="Features" component={Feature}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimalList from './animals';
import { cats, dogs }  from './breeds';
import { Ionicons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
        
              if (route.name === 'Cats') {
                iconName = 'logo-octocat';
              } else if (route.name === 'Dogs') {
                iconName = 'paw';
              }
        
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Cats" children={(props) => <AnimalList data={cats} {...props}/>} />
          <Tab.Screen name="Dogs" children={() => <AnimalList data={dogs}/>} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});
