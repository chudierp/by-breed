import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feature from './feature'

function Item(props) {
	const {data} = props
	const {breed} = data
	const keys = Object.keys(data).filter(key => key != 'breed')

	const average = (keys.reduce((acc, key) => {
		return acc + data[key]
	}, 0) / keys.length).toFixed(1)
	return (
		<View style= {styles.container}>
			<Text style={styles.label}>{breed} {average}</Text>
			{/* {keys.map(key => <Text>{key} {data[key]}</Text>)} */}
			{keys.map(key => <Feature name={key} key={key} value={data[key]}/>)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		margin: 1,
		backgroundColor: 'white'

	},
	label: {
		fontSize: 20,
	}
})

export default Item