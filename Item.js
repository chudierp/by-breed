
   
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import Feature from './feature'

function Item(props) {
	const {dog} = props
	const {breed} = dog
	
	return (
		<View style= {styles.container}>
			<Text style={styles.header}>{breed}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		margin: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 3,

	},
	header: {
		width: '100%',
		fontSize: 20,
		
	}
})

export default Item
