import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homescreen'
import DetailsScreen from './feature';

const Stack = createStackNavigator();

function AnimalList({ data }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BREEDS" children={(props) => <HomeScreen data={data} {...props} />} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default AnimalList;