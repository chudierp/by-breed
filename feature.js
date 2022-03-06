import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


const star = "⭐️"

function DetailsScreen({ navigation, route }) {
    const data = route.params
    const keys = Object.keys(data)
    
    return (
        <ScrollView>
            <View>
            {keys.filter((name) => name != 'breed').map((key) => {
                return (
                <View style={styles.details}>
                    <Text style={styles.title}>{key}:</Text>
                    <Text style={styles.stars}>{star.repeat(parseInt(data[key]))}</Text>
                </View>
                )
            })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    details: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
  
    export default DetailsScreen;