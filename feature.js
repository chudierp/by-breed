import React from "react";

import {View, Text, StyleSheet} from 'react-native'

function Feature({route}) {
    const item = route.params.item.item;
    const keys = Object.keys(item)
    return (
        <>
            <Text>{item['breed']}</Text>
            <View style={styles.keysContainer}>
                <View>
                    {keys.filter(key => key != 'breed').map(key => { 
                    let rate = "";
                    for(let i = 0; i < item[key]; i += 1) {
                        rate += "⭐️"
                    }
                    return (
                    // <Feature name={key} value={rate} />
                        <Text>{key}: {rate}</Text>
                    )
                    })}
                </View>
            </View>
        </>
    )
}

export default Feature

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    name: {
        fontSize: 16
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold'
    }

})