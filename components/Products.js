import React,{useState} from 'react';
import {View, Text, Button, StyleSheet, Image, TextInput} from 'react-native';
import {Data} from '../assets/cartData';

export const Products = () => {
  const [item1Quantity, setItem1Quantity] = useState(0);
  const [item2Quantity, setItem2Quantity] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: '#E0F7FA'}}>
      <View style={styles.total_bill}>
        <Text style={styles.total_bill_text}>
          Total : <Text style={{fontWeight: '800', fontSize: 18}}>$117.5</Text>
        </Text>
      </View>
      <View style={styles.container}>
        {React.Children.toArray(
          Data.map(Item => (
            <View style={styles.item_box}>
              <View style={styles.item_img}>
                <Image style={styles.img_style} source={Item.img} />
              </View>
              <View style={styles.name_price}>
                <Text style={styles.item_name}>{Item.name}</Text>
                <Text style={styles.item_price}>{Item.price}</Text>
              </View>
              {/*  button to increment */}
              <View style={styles.inc_dec_btn}>
                <Button title="-" style={styles.dec_btn} />
                <TextInput style={styles.count_dis} />
                <Button title="+" style={styles.inc_btn} />
              </View>
            </View>
          )),
        )}
      </View>
      <View>
        <Button title="checkout" />
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
  item_box: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 200,
    height: 10,
  },
  item_img: {
    margin: 10,
  },
  img_style: {
    width: 150,
    height: 150,
  },
  name_price: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item_name: {
    fontSize: 18,
    fontWeight: '500',
  },
  item_price: {
    fontSize: 20,
    fontWeight: '700',
  },
  inc_dec_btn: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: 150,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  inc_btn: {
    // 
  },
  dec_btn: {
  // 
  },
  count_dis: {
    borderWidth: 1,
  },
});
