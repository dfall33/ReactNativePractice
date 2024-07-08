import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
// import { v4 as uuidv4 } from 'uuid';
import ListItem from './components/ListItem';

const App = () => {

    const [items, setItems] = useState([
      {id: '00000', text: 'Milk'},
      {id: '00001', text: 'Juice'},
      {id: '00010', text: 'Bread'},
      {id: '00011', text: 'Eggs'},
    ]);

    const deleteItem = (id) => {
      setItems(prevItems => {
        return (
          prevItems.filter(item => item.id != id)
        );
      });
    }
 
    return (
        <View style={styles.container}>
            <Header />
            <FlatList 
              data={items} 
              renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
    
  },
})

export default App; 