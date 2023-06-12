import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// Class Component
class StylingComponent extends Component {
  render() {
    return (
      <View>
        {/* Header */}
        <View style={styles.kotakHeader}>
          <Text style={styles.text}>Styling Component</Text>
        </View>
        {/* Body */}
        <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 15}}>
          <View style={styles.cardStyle}>
            <Image
              source={require('./src/images/laptop.jpg')}
              style={styles.imageCard}
            />
            <Text style={styles.textJudul}>ASUS Vivobook 14 2019</Text>
            <Text style={styles.textHarga}>Rp. 15.000.000,-</Text>
            <Text style={styles.textLokasi}>Purwokerto</Text>
            <View style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                BUY
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 20, marginBottom: 50}}>
          <View style={styles.cardStyle}>
            <Image
              source={require('./src/images/parfum.jpg')}
              style={styles.imageCard}
            />
            <Text style={styles.textJudul}>Parfum Chanel Jennie</Text>
            <Text style={styles.textHarga}>Rp. 10.000.000,-</Text>
            <Text style={styles.textLokasi}>Puerto Rico</Text>
            <View style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                BUY
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// StyleSheet
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
  cardStyle: {
    width: 212,
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  imageCard: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  textJudul: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
  textHarga: {
    fontSize: 14.5,
    fontWeight: '700',
    color: '#f9690e',
    marginTop: 3,
  },
  textLokasi: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#66cc99',
    paddingVertical: 6,
    marginTop: 12,
    borderRadius: 8,
  },
});

export default StylingComponent;
