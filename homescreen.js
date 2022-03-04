import * as React from 'react';
import { View, KeyboardAvoidingView, Platform,  FlatList, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';
import { StyleSheet} from 'react-native';
import { cats } from './breeds'
import Item from './Item'
import { StatusBar } from 'expo-status-bar';

function HomeScreen() {
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
                    data = {cats.filter(item => item.breed.includes(search))}
                    renderItem={({ item }) => {
                        return <Item data={item} />
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