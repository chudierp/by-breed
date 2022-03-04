import * as React from 'react';
import { Button, View, KeyboardAvoidingView, Platform,  FlatList, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';
import { StyleSheet} from 'react-native';
import { dogs } from './breeds'
import Item from './Item'
import { StatusBar } from 'expo-status-bar';


function HomeScreen({navigation}) {
    const [search, setSearch] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.kav}
            >
            
                <View style={styles.listContainer}>
                    <FlatList
                    data = {dogs.filter(item => item.breed.includes(search))}
                    renderItem={({ item }) => {
                        console.log(item)
                        return (
                        <View>    
                            <Item dog={item} />
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
                placeholder='Search'
                onChangeText={setSearch}
                value={search}
                />
            
            </KeyboardAvoidingView>
        </SafeAreaView>
    
    );
  }
const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  listContainer: {
    width: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    fontSize: 24,
    padding: 10,
    margin: 2,
    borderWidth: 1
  }
});

export default HomeScreen;