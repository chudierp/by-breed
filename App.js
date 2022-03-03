
   
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, StyleSheet, View, FlatList, SafeAreaView, TextInput, Text, Button } from 'react-native';
import Item from './Item';
import {dogs} from './breeds';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feature from './feature';

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >

        <View style={styles.listContainer}>
          <FlatList
            data={dogs.filter(item  => item.breed.includes(search))}
            renderItem={({item, index}) => {
              return (
              <View style={styles.itemContainer}>
                <Item dog={item} index={index}/>
                <Button
                  title='Details'
                  onPress={() => navigation.navigate('Features', {
                  item:{item}
                  })}
                />
              </View>
              )
            }}
            keyExtractor={item => item.breed}
          />
          
        </View>
        <TextInput 
          style={styles.search}
          placeholder='Search Breed'
          onChangeText={setSearch}
          value={search}
        />

      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Features" component={Feature}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    fontSize: 24,
    padding: 10,
    margin: 2
  },
  itemContainer: {
    backgroundColor: 'white',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    paddingTop: 10,
    paddingBottom: 10,
    width: 390,
  }
});

export default App;