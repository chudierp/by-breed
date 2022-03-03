import React from "react";
import { StyleSheet, View, Text} from 'react-native'
// import Feature from "./feature";

function Item(props) {
    const {dog, index} = props
    const { breed } = dog

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{index}: {breed}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
	container: {
		// padding: 10,
		// margin: 1,
		backgroundColor: 'white',
		justifyContent: 'center',

	},
	header: {
		fontSize: 20,
	}
})

export default Item
