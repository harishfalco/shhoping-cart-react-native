import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Context from '../Context/Context';

const IndvidualProduct = ({data}) => {
  let {count, setCount, price, setPrice} = useContext(Context);

  const [num, setNum] = useState(0);

  const decrementQuantity = () => {
    if (num <= 0) {
      setNum(0);
    }
    if (num > 0) {
      setNum(num - 1);
      setCount(prev => prev - 1);
      setPrice(prev => prev - data.price);
      console.log(`updated price : ${num}`);
      console.log(`updated price : ${price}`);
    }
  };

  const incrementQuantity = () => {
    setNum(num + 1);
    setCount(prev => prev + 1);
    setPrice(prev => prev + data.price);
    console.log(`updated price : ${num}`);
    console.log(`updated price : ${price}`);
  };

  const handleChange = e => {
    setNum(e);
  };
  return (
    <View style={styles.item_box}>
      <View style={styles.item_img}>
        <Image style={styles.img_style} source={data.img} />
      </View>
      <View style={styles.name_price}>
        <Text style={styles.item_name}>{data.name}</Text>
        <Text style={styles.item_price}>{'$' + data.price}</Text>
      </View>
      {/*  button to increment */}
      <View style={styles.inc_dec_btn}>
        <TouchableOpacity style={styles.dec_btn} onPress={decrementQuantity}>
          <Text>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.count_dis}
          value={num.toString()}
          onChangeText={handleChange}
          // editable={false}
        />
        <TouchableOpacity style={styles.inc_btn} onPress={incrementQuantity}>
          <Text>+</Text>
        </TouchableOpacity>
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
    margin: 5,
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
    margin: 10,
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
    fontSize: 14,
    fontWeight: '500',
  },
  item_price: {
    fontSize: 18,
    fontWeight: '700',
  },
  inc_dec_btn: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    width: 150,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  inc_btn: {
    marginVertical: 10,
    backgroundColor: '#12B0E8',
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '700',
    color: '#CAD5E2',
    fontSize: 32,
  },
  dec_btn: {
    marginVertical: 10,
    backgroundColor: '#12B0E8',
    paddingHorizontal: 10,
    borderRadius: 50,
    fontWeight: '400',
    color: '#CAD5E2',
    fontSize: 18,
  },
  count_dis: {
    fontWeight: '500',
  },
});

export default IndvidualProduct;
