// bugSolution.js
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const App = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id} // Correct keyExtractor
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;