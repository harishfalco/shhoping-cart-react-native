import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';
import Context from '../Context/Context';

export const Order = ({navigation}) => {
  let {count, price} = useContext(Context);
  return (
    <View style={styles.container}>
      <View style={styles.total_items}>
        <Text style={styles.total_items_text}>
          Total Items in cart :
          <Text style={{fontWeight: '800'}}> {JSON.stringify(count)}</Text>
        </Text>
      </View>
      <Text style={styles.total_bill}>
        <Text style={styles.total_bill_text}>
          {' '}
          {'Total : $ ' + JSON.stringify(price)}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  total_items: {
    borderWidth: 1,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  total_items_text: {
    fontSize: 18,
    color: 'black',
  },
  total_bill: {
    padding: 10,
    backgroundColor: '#24A19C',
    borderRadius: 5,
    margin: 30,
  },
  total_bill_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
  },
});
