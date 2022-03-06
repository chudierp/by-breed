import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const star = "⭐️"

function DetailsScreen({ navigation, route }) {
    const data = route.params
    const keys = Object.keys(data)
    
    return (
        <View>
        {keys.filter((name) => name != 'breed').map((key) => {
            return (
            <View style={styles.details}>
                <Text>{key}:</Text>
                <Text>{star.repeat(parseInt(data[key]))}</Text>
            </View>
            )
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    title: {
        fontSize: 32,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});
  
    export default DetailsScreen;