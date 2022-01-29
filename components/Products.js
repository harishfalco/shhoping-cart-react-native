import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Data} from '../assets/cartData';
import Context from '../Context/Context';
import IndvidualProduct from './IndvidualProduct';

export const Products = ({navigation}) => {
  let {count, setCount, price, setPrice} = useContext(Context);

  return (
    <View style={{flex: 1, backgroundColor: '#E0F7FA'}}>
      <View style={styles.total_bill}>
        <Text style={styles.total_bill_text}>
          Total :{' '}
          <Text style={{fontWeight: '800', fontSize: 18}}>{'$' + price}</Text>
        </Text>
      </View>
      <View style={styles.container}>
        {React.Children.toArray(
          Data.map(Item => <IndvidualProduct data={Item} />),
        )}
      </View>
      <View>
        <Button
          title="checkout"
          color="#120E43"
          style={styles.check_out_btn}
          onPress={() => navigation.navigate('order')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  total_bill: {
    padding: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#24A19C',
    borderRadius: 5,
    margin: 10,
  },
  total_bill_text: {
    color: 'white',
  },
  // check_out_btn: {
  //   flex: 1,
  //   alignSelf: 'center',
   
  // },
});
