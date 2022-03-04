import * as React from 'react';
import { View, KeyboardAvoidingView, Platform,  FlatList, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';
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

export default HomeScreen;