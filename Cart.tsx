import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

const Cart = () => {
  const [number, setNumber] = useState(0);
  const [harga, setHarga] = useState(0);
  return (
    <View>
      {/* Header */}
      <View style={styles.kotakHeader}>
        <Text style={styles.text}>Cart</Text>
      </View>
      {/* Body */}
      <View style={styles.boxKotak}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Total Stock: 14
        </Text>

        {/* Quantity */}
        <View style={{flexDirection: 'row'}}>
          {/* Min */}
          <TouchableOpacity
            style={styles.kotakMin}
            onPress={() => [setNumber(number - 1), setHarga(harga * 10.0)]}>
            <View>
              <Text style={styles.styleMin}>-</Text>
            </View>
          </TouchableOpacity>
          {/* Qty */}
          <TouchableOpacity style={styles.kotakQty}>
            <View>
              <Text>{number}</Text>
            </View>
          </TouchableOpacity>
          {/* Plus */}
          <TouchableOpacity
            style={styles.kotakPlus}
            onPress={() => setNumber(number + 1)}>
            <View>
              <Text style={styles.stylePlus}>+</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Struk */}
        <View style={{paddingHorizontal: 5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
              marginTop: 25,
            }}>
            <Text style={{fontSize: 16, fontWeight: '800', opacity: 0.5}}>
              Price
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>0</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 16, fontWeight: '700', opacity: 0.5}}>
              Shipping
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>0</Text>
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity>
          <View style={styles.buttonAdd}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 14,
                opacity: 0.7,
              }}>
              Add to Cart
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buttonBuy}>
            <Text
              style={{
                color: '#f9690e',
                fontWeight: '700',
                fontSize: 14,
                opacity: 0.7,
              }}>
              Buy Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  kotakHeader: {
    height: 50,
    backgroundColor: '#392e4a',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '200',
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    opacity: 0.85,
  },

  boxKotak: {
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 15,
    borderColor: '#ececec',
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
  },
  kotakMin: {
    flex: 1,
    height: 40,
    backgroundColor: '#ede7e1',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  styleMin: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#bfbfbf',
  },
  kotakQty: {
    flex: 2,
    height: 40,
    borderColor: '#ede7e1',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  kotakPlus: {
    flex: 1,
    height: 40,
    backgroundColor: '#f9690e',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  stylePlus: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    opacity: 0.9,
  },
  buttonAdd: {
    backgroundColor: '#f9690e',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 40,
  },
  buttonBuy: {
    borderColor: '#f9690e',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    height: 40,
  },
});
