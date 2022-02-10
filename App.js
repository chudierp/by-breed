import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView, Text, View } from 'react-native';


import { cats } from './breeds'
import Item from './Item'

export default function App() {
  console.log(cats)
  return (
    <SafeAreaView>
      <View style={styles.listContainer}>
        <FlatList
          data = {cats}
          renderItem={({ item }) => {
            return <Item data={item} />
          }}
          keyExtractor={item => item.breed}

        />
      </View>
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
});
