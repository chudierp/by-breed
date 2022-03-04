import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform,  FlatList, SafeAreaView, TextInput, View } from 'react-native';


import { cats } from './breeds'
import Item from './Item'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={styles.kav}
      >
      <StatusBar style='auto' />
      <View style={styles.listContainer}>
        <FlatList
          data = {cats.filter(item => item.breed.includes(search))}
          renderItem={({ item }) => {
            return <Item data={item} />
          }}
          keyExtractor={item => item.breed}
        />
      </View>
      <View>
        <TextInput 
          style={styles.search}
          placeholder='Search'
          onChangeText={setSearch}
          value={search}
        />
      </View>  
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
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
  },
});