import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, FlatList, Keyboard } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState('');

  const add = ()=>{
    setList([...list, {key: item}]);
    setItem('');
    Keyboard.dismiss()
  }
  const clear = () => {
    setList([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.inputbox}
      onChangeText={item => setItem(item)}
      value={item}
      />

      <View style={styles.buttonfield}>
        <Button title='ADD' onPress={add}/>
        <Button title='CLEAR' onPress={clear}/>
      </View>
      <FlatList 
      data={list}
      renderItem={({item}) => <Text>{item.key}</Text>}
      keyExtractor={(item, index) => index.toString()}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputbox: {
    width: 300,
    borderWidth: 1,
    borderColor: 'blue'
  },
  buttonfield: {
    flexDirection: 'row',
    alignItems: 'stretch'
  }
});
