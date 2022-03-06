import { FlatList } from 'react-native';
import Item from './Item';

function HomeScreen({ navigation, data }) {
  return (
    <FlatList
      ref={(list) => flatListRef = list}
      data={data}
      renderItem={({ item }) => {
        console.log(item)
        return <Item title={`${item.breed}`} data={item} navigation={navigation} />
      }}
      keyExtractor={item => {
        return item.breed
      }}
    />
  )
}

export default HomeScreen;