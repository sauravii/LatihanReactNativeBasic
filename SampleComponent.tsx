import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

// Class Component
class SampleComponent extends Component {
  render() {
    return (
      <View>
        {/* Header */}
        <View style={styles.kotakHeader}>
          <Text style={styles.text}>Sample Component</Text>
        </View>
        {/* Body */}
        <View style={{marginHorizontal: 20}}>
          <Kotak />
          <InputText />
          <ImagePost />
        </View>
      </View>
    );
  }
}

// Kotak
const Kotak = () => {
  return (
    <View style={styles.enter}>
      <Text style={styles.textJudul}>Ini Kotak</Text>
      <View style={styles.kotakClass}></View>
    </View>
  );
};

// Text Input
const InputText = () => {
  return (
    <View style={styles.enter}>
      <Text style={styles.textJudul}>Ini Text Input</Text>
      <TextInput style={styles.inputText} />
    </View>
  );
};

// Image
const ImagePost = () => {
  return (
    <View style={{marginBottom: 50}}>
      <Text style={styles.textJudul}>Ini gambar online</Text>
      <Image
        source={{uri: 'https://placeimg.com/100/100/arch'}}
        style={styles.imageStyle}
      />
      <Text style={styles.textJudul}>Ini gambar offline</Text>
      <Image
        source={require('./src/images/gambar.jpg')}
        style={styles.imageStyle}
      />
    </View>
  );
};

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
  enter: {
    marginBottom: 15,
  },
  textJudul: {
    marginBottom: 5,
  },
  kotakClass: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
  },
  imageStyle: {
    width: 200,
    height: 150,
  },
});

export default SampleComponent;
