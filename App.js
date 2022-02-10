import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, ScrollView, SafeAreaView, Text, View } from 'react-native';


import { cats } from './breeds'
import Item from './Item'

export default function App() {
  console.log(cats)
  return (
      <FlatList
        data = {cats}
        renderItem={({ item, index }) => {
          return <Item title={`${index} ${item.breed}`} />
        }}
        keyExtractor={item => item.breed}

      />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
