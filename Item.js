import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Item(props) {
	const {data} = props
	const {breed} = data
	const keys = Object.keys(data).filter(key => key != 'breed')
	return (
		<View style= {styles.container}>
			<Text style={styles.label}>{breed}</Text>
			{keys.map(key => <Text>{key} {data[key]}</Text>)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		margin: 1,
		backgroundColor: 'tan'

	},
	label: {
		fontSize: 20,
	}
})

export default Item