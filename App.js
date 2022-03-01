import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView, TextInput, View } from 'react-native';


import { cats } from './breeds'
import Item from './Item'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
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
      <TextInput 
        style={styles.search}
        placeholder='Search'
        onChangeText={setSearch}
        value={search}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
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
    margin: 2
  },
});
